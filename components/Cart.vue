<template>
  <div id="cart" class="cart-container ">
    <div class="card">
      <div class="big-title">
        <p>Resumen de Pedido</p>
      </div>
      <div class="row" style="height: 100%">
        <div class="custom-col">
          <p class="subt">
            Entregamos pedidos en la Zona Marcada
          </p>
          <div class="map"/>
          <p class="subt">
            Detalles del envío
          </p>
          <div class="info-text">
            <p>
              El envío puede tardar hasta 24 hrs dependiendo de la carga de pedidos. Una
              vez confirmada la orden, atención al cliente se contactara contigo por WhatsApp para ultimar detalles
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
                Agrega un Pedido
              </a>
            </div>
          </div>

          <div v-if="step === 1 && orders.length > 0" class="cart-items">
            <p class="subt">
              Carrito de compras
            </p>

            <div class="cart-datatable-container">
              <cart-datatable :orders="orders"/>
            </div>

            <div class="d-flex justify-end mt-4">
              <p class="subt">
                TOTAL
              </p>
            </div>
            <p class="total">
              {{ total.toLocaleString() }}
            </p>
            <div class="btn-container">
              <custom-button title="Continuar" @click="step = 2"/>
            </div>
          </div>

          <div v-if="step === 2" class="cart-items">
            <p class="subt">
              Datos del Cliente
            </p>
            <div v-if="step === 2" class="form-g">
              <v-form v-model="valid">
                <form-input v-model="user.name" label="Nombre" :rules="[validators.required]"/>
                <form-input v-model="user.email" label="Email" :rules="[validators.required, validators.email]"/>
                <div class="form-divider">
                  <form-input v-model="user.phone" label="Celular" :rules="[validators.number, validators.required]"/>
                  <form-input v-model="user.ruc" label="Ruc" :rules="[validators.required]"/>
                </div>
                <form-select
                  v-model="user.payment"
                  label="Forma de Pago"
                  :items="payment"
                  :rules="[validators.required]"
                />
              </v-form>

              <div>
                <div>
                  <div class="d-flex justify-end">
                    <p class="subt">
                      TOTAL
                    </p>
                  </div>

                  <p class="total">
                    {{ total.toLocaleString() }}
                  </p>
                </div>
              </div>

              <div class="btn-container">
                <p class="back" @click="step = 1">
                  Atras
                </p>
                <custom-button :disabled="!valid" title="Finalizar" color="#D66A6A" @click="sendEmail"/>
                <order-sent-dialog v-model="showDialog" @change="dialogClosed"/>
              </div>
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

export default Vue.extend({
  name: 'Cart',
  components: {
    CartDatatable,
    FormSelect,
    FormInput,
    CustomButton
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
      phone: null
    } as UserModel,
    payment: ['Efectivo', 'Transferencia']
  }),
  computed: {
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
      this.step = 2
      try {
        if (Object.values(this.user).includes(null)) {
          return
        }
        this.$store.commit('setLoading')
        const model: EmailSenderModel = {
          user: this.user,
          order: this.orders
        }
        await this.$axios.$post('email-sender', model)
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
}

.cart-datatable-container {
  height: 330px;
  overflow: auto;
}

.row {
  display: flex;
  justify-content: space-evenly;
}

.custom-col {
  width: 50%;
}

.form-divider {
  display: block;
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
  bottom: 0;
  //bottom: 20px;
  right: 0;

  .back {
    font-size: 1.1rem;
    color: #d5d5d5;
    align-self: end;
    cursor: pointer;
    margin-right: 20px;
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
  //width: 500px;
  position: relative;
  padding: 0 10px;
  height: 500px;

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
  height: 650px;
  background-color: white;
  border-radius: 25px;
  elevation: 1deg;
  box-shadow: 0 0 15px rgb(204, 207, 207);
  padding: 50px 60px;
}

.big-title {
  width: 100%;

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
  font-size: 1rem;
  font-weight: 800;
  color: #4E4E51;
}

.map {
  height: 300px;
}

.info-text {
  width: 60%;

  p {
    font-size: 0.9rem;
    font-weight: 300;
    color: #8B8888;
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
        width: 180px;
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
      text-decoration: underline;
      text-align: center;
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
