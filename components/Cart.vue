<template>
  <div id="cart" class="cart-container ">
    <div class="card">
      <div class="big-title">
        <p>Resumen de Pedido</p>
      </div>
      <div class="row" style="height: 100%">
        <div class="custom-col">
          <p class="subt">
            Entregamos pedidos en la zona marcada
          </p>
          <div class= "map">
            <div class= "img-map">
              <map-dialog/>
            </div>
          </div>
          <p class="subt">
            Detalles del delivery
          </p>
          <div class="info-text">
            <p>
              El envío puede tardar hasta 24 hrs dependiendo de la carga de pedidos. Una
              vez confirmada la orden, un compañero de atención al cliente se contactará contigo por WhatsApp para ultimar detalles del envío.
            </p>
          </div>
        </div>
        <div class="custom-col">
          <div v-if="orders.length === 0" class="empty-cart">
            <div class="empty-cart-items">
              <div class="sad-face-box">
                <img src="sad%20face.png" alt="sad-face">
              </div>
              <p>Tu carrito esta vacío</p>
              <a class="link" href="#home" @click="addNewOrder">
                Agrega un pedido
              </a>
            </div>
          </div>

          <div v-if="step === 1 && orders.length > 0" class="cart-items">
            <p class="subt">
              Carrito de compras
            </p>

            <div class="cart-datatable-container">
              <cart-datatable :orders="orders" />
            </div>

            <div class="d-flex justify-end ">
              <p class="total-final">
                TOTAL
              </p>
            </div>
            <p class="total"> Gs.
              {{ total.toLocaleString('es-es') }}
            </p>
            <div class="btn-container">
              <custom-button title="Continuar" @click="step = 2" />
            </div>
          </div>

          <div v-if="step === 2">
            <div class="cart-items">
              <p class="subt">
                Datos del cliente
              </p>
              <div v-if="step === 2" class="form-g">
                <v-form v-model="valid">
                  <form-input v-model="user.name" label="Nombre" :rules="[validators.required]" />
                  <form-input v-model="user.email" label="Email" :rules="[validators.email, validators.notrequired]" />
                  <div class="form-divider">
                    <form-input v-model="user.phone" label="Celular" :rules="[validators.number, validators.required]" />
                    <form-input v-model="user.ruc" label="RUC/CI" :rules="[validators.notrequired]" />
                  </div>
                  <form-select
                    v-model="user.payment"
                    label="Forma de pago"
                    :items="payment"
                    :rules="[validators.required]"
                  />
                  <div class="form-divider">
                    <form-select
                      v-model="user.shippingMethod"
                      label="Método de envío"
                      :items="shippingMethod"
                      :rules="[validators.required]"
                    />
                    <form-input
                      v-model="user.address"
                      :disabled="user.shippingMethod === 'Retiro del local'"
                      label="Dirección"
                      :rules=" user.shippingMethod === 'Retiro del local' ? [] :[validators.required]"
                    />
                  </div>
                </v-form>

                <div>
                  <div>
                    <div class="d-flex justify-end">
                      <p class="total-final">
                        TOTAL
                      </p>
                    </div>
                    <p class="total">Gs.
                      {{ total.toLocaleString('es-es') }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-container">
              <p class="back" @click="step = 1">
                Atrás
              </p>
              <custom-button :disabled="!valid" title="Finalizar" color="#D66A6A" @click="sendEmail" />
              <order-sent-dialog v-model="showDialog" @change="dialogClosed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CustomButton from './CustomButton.vue'
import FormInput from './FormInput.vue'
import FormSelect from './FormSelect.vue'
import CartDatatable from './CartDatatable.vue'
import { EmailSenderModel } from '~/models/EmailSenderModel'
import { OrderModel } from '~/models/OrderModel'
import { UserModel } from '~/models/UserModel'
import { Validators } from '~/shared/validators'
import MapDialog from './MapDialog.vue'

export default Vue.extend({
  name: 'Cart',
  components: {
    CartDatatable,
    FormSelect,
    FormInput,
    CustomButton,
    MapDialog,
  },
  data: () => ({
    step: 1,
    valid: false,
    validators: Validators,
    showDialog: false,
    user: {
      email: null,
      name: null,
      ruc: null,
      payment: 'Efectivo',
      phone: null,
      address: null,
      shippingMethod: 'Delivery'
    } as UserModel,
    payment: ['Efectivo', 'Transferencia'],
    shippingMethod: ['Delivery', 'Retiro del local']
  }),
  computed: {
    disableAddress (): boolean {
      return this.user.shippingMethod === 'Retiro del local'
    },
    orders: {
      get (): OrderModel[] {
        return this.$store.getters.orders
      }
    },
    total: {
      get (): number {
        return this.$store.getters.total
      }
    }
  },
  methods: {
    async sendEmail () {
      console.log("here")
      this.step = 2
      try {
        console.log(this.user)
        this.$store.commit('setLoading')
        const model: EmailSenderModel = {
          user: this.user,
          order: this.orders
        }
        await this.$axios.$post('email-sender', model)
        console.log("here")
        this.$store.commit('setLoading')
        this.showDialog = true
      } catch (e) {
        console.log(e)
      }
    },
    dialogClosed () {
      this.$store.commit('resetCart')
      this.step = 1

      window.location.href = '#home'
    },
    addNewOrder () {
      this.$store.commit('createNewOrder', true)
      this.$store.commit('reset')
    }
  }
})
</script>

<style scoped lang="scss">
.form-g {
  width: 100%;
  height: auto;
}

.cart-datatable-container {
  height: 450px;
  overflow: auto;
}

.row {
  display: flex;
  justify-content: space-evenly;
}

.custom-col {
  width: 50%;
  position: relative;
}

.form-divider {
  display: block;
  padding: 0 -5px;
  width: calc(100% + 10px);
}

.totals {
  display: flex;
  justify-content: end;
  width: 100%;
}

.btn-container {
  display: flex;
  justify-content: end;
  margin-top: auto;
  position: absolute;
  right: 0;

  .back {
      font-size: 1.1rem;
      color: #acacac;
      align-self: end;
      cursor: pointer;
      padding: 10px 10px 0;
      transition: 0.2s;
    }

    .back:hover {
      color: #666666;
    }
}

.total {
  display: flex;
  justify-content: end;
  align-self: end;
  font-size: 1rem;
  font-weight: bold;
  color: #8B8888;
}

.header-text {
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #8B8888;
  padding: 10px;
}

.cart-items {
  position: relative;
  padding: 0 10px;
  height: auto;

  .headers {
    margin-right: auto;
    display: flex;
    width: 100%;
    justify-content: right;

    .header-items {
      display: flex;
      width: 50%;
      justify-content: space-evenly;

      p {
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        color: #8B8888;
        padding: 10px;
      }
    }
  }
}

.cart-container {
  width: 100vw;
  height: 100vh;
  min-height: 900px;
  background-color: #E0E0E0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card {
  width: 80%;
  height: 800px;
  background-color: white;
  border-radius: 25px;
  elevation: 1deg;
  box-shadow: 0 0 15px rgb(204, 207, 207);
  padding: 50px 60px;
}

.big-title {
  width: 100%;
  padding-bottom: 20px;
  p {
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
    color: #4e4e51;
  }
}

.form-divider {
  display: flex;
  width: 100%;
}

.subt {
  font-size: 1.2rem;
  font-weight: 500;
  color: #4e4e51;

}

.total-final{
  margin-bottom: 0;
  color: #8B8888;
}

.total{
  font-size:1.5rem;
  color: #4e4e51;
  margin-bottom: 0.5rem;
}

.map {
  height: 300px;
  width: 100%;

  padding-right: 3rem;
  padding-bottom: 2rem;

  .img-map{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    filter: grayscale(100%);
    transition: 0.3s;

  }

  .img-map:hover{
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    filter: grayscale(0%);
  }



}

.info-text {
  width: 90%;

  p {
    font-size: 1rem;
    font-weight: 400;
    color: #666666;
  }
}

.empty-cart {
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 100px;

  .empty-cart-items {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    .sad-face-box {
      margin: auto;
      margin-bottom: 0.6rem;
      width: fit-content;

      img {
        width: 130px;
        opacity: 0.8;
        transition: 0.3s
      }

      img:hover {
        opacity: 1;
        transform: scale(1.05);
      }
    }

    p {
      font-size: 1rem;
      color: #4E4E51;
      font-weight: 800;
      margin-bottom: 0.2rem;
    }

    .link {
      color: #8B8888;
      font-size: 1rem;
      text-decoration: none;
      text-align: center;
      transition: 0.2s;
    }

    .link:hover{
      text-decoration: underline;
      color:#4e4e51
    }
  }
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {

  .form-divider {
    display: flex;
  }
  .map {
    height: 200px;
  }

  .empty-cart {
    .empty-cart-items {
      .sad-face-box {
        img {
          width: 133.3px;
        }
      }

      p {
        font-size: 16.6px;
      }

      .link {
        font-size: 16.6px;
      }
    }
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .card {
    width: 90%;
  }
  .back {
    font-size: 16px;
  }
  .total {
    font-size: 16px;
  }
  .big-title {
    p {
      font-size: 35px;
    }
  }

  .subt {
    font-size: 14px;
  }

  .info-text {
    p {
      font-size: 14px;
    }
  }

  .empty-cart {
    .empty-cart-items {
      .sad-face-box {
        img {
          width: 120px;
        }
      }

      p {
        font-size: 14px;
      }

      .link {
        font-size: 14px;
      }
    }
  }

  .map {
    height: 180px;
  }

  .form-divider {
    display: flex;
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
  .totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn-container {
    position: relative;
    bottom: 0;
  }
  .back {
    font-size: 16px;
  }
  .total {
    font-size: 16px;
  }
  .big-title {
    p {
      font-size: 20px;
    }
  }

  .subt {
    font-size: 14px;
  }

  .info-text {
    p {
      font-size: 14px;
    }
  }

  .empty-cart {
    .empty-cart-items {
      img {
        width: 120px;
      }

      p {
        font-size: 14px;
      }

      .link {
        font-size: 14px;
      }
    }
  }

  .map {
    height: 180px;
  }

  .form-divider {
    display: flex;
  }
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
