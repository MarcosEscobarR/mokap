<template>
  <div id="cart" class="cart-container ">
    <div class="card">
      <div class="big-title">
        <p>Resumen de Pedido</p>
      </div>
      <div class="row" style="height: 100%">
        <div class="col">
          <p class="subt">
            Entregamos pedidos en la Zona Marcada
          </p>
          <div class="map" />
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
        <div class="col">
          <div v-if="orders.length === 0" class="empty-cart">
            <div class="empty-cart-items">
              <img src="sad%20face.png" alt="sad-face">
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

            <cart-datatable :orders="orders" />

            <div class="d-flex justify-end mt-4">
              <p class="subt">
                TOTAL
              </p>
            </div>
            <p class="total">
              {{ orders.reduce((a, b) => a + b.quantity * 25000, 0) }}
            </p>
            <div class="btn-container">
              <custom-button title="Continuar" @click="step = 2" />
            </div>
          </div>

          <div v-if="step === 2" class="cart-items">
            <p class="subt">
              Datos del Cliente
            </p>
            <div class="form-group">
              <v-form v-model="valid">
                <form-input v-model="user.name" label="Nombre" :rules="[validators.required]" />
                <form-input v-model="user.email" label="Email" :rules="[validators.required, validators.email]" />
                <form-input v-model="user.phone" label="Celular" :rules="[validators.number, validators.required]" />
                <form-input v-model="user.ruc" label="Ruc" :rules="[validators.required]" />
                <form-select v-model="user.payment" label="Forma de Pago" :items="payment" :rules="[validators.required]" />
              </v-form>

              <div class="totals">
                <div class="btn-container">
                  <p class="back" @click="step = 1">
                    Atras
                  </p>
                  <custom-button :disabled="!valid" title="Finalizar" color="#D66A6A" @click="sendEmail" />
                </div>
                <div>
                  <div class="d-flex justify-end mt-4">
                    <p class="subt">
                      TOTAL
                    </p>
                  </div>
                  <p class="total">
                    {{ orders.reduce((a, b) => a + b.quantity * 25000, 0) }}
                  </p>
                </div>
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
    }
  },
  methods: {
    async sendEmail () {
      this.step = 2
      try {
        if (Object.values(this.user).includes(null)) { return }
        this.$store.commit('setLoading')
        const model: EmailSenderModel = { user: this.user, order: this.orders }
        await this.$axios.$post('email-sender', model)
        this.$store.commit('resetCart')
        this.$store.commit('setLoading')
        window.location.href = '#home'
      } catch (e) {
        console.log(e)
      }
    },
    addNewOrder () {
      this.$store.commit('createNewOrder', true)
      this.$store.commit('reset')
    }
  }
})
</script>

<style scoped lang="scss">
.form-group {
  width: 100%;
}

.totals {}
.back {
  font-size: 35px;
  color: #d5d5d5;
  align-self: end;
  cursor: pointer;
  margin-right: 20px;
}

.btn-container {
  display: flex;
  justify-content: end;
  margin-top: auto;
  position: absolute;
  bottom: 100px;
  right: 0;
}

.total {
  display: flex;
  justify-content: end;
  font-size: 25px;
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
  height: 100%;
  position: relative;

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
  background-color: #E0E0E0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card {
  width: 90%;
  height: 80%;
  background-color: white;
  border-radius: 25px;
  elevation: 1deg;
  box-shadow: 0 0 15px rgb(204, 207, 207);
  padding: 50px 60px;
}

.big-title {
  width: 100%;

  p {
    font-size: 60px;
    font-weight: bold;
    text-align: center;
    color: #8B8888;
  }
}

.subt {
  font-size: 35px;
  color: #4E4E51;
  font-weight: 400;
}

.map {
  height: 300px;
}

.info-text {
  width: 60%;

  p {
    font-size: 25px;
    font-weight: 300;
    color: #8B8888;
  }
}

.empty-cart {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .empty-cart-items {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    img {
      width: 200px;
    }

    p {
      font-size: 25px;
      color: #4E4E51;
    }

    .link {
      color: #8B8888;
      font-size: 25px;
      text-decoration: underline;
      text-align: center;
    }
  }
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn-container {
    position: relative;
    bottom: 0;
    margin-bottom: 20px;
  }
  .back {
    font-size: 16px;
  }
  .total {
    font-size: 16px;
  }
  .subt {
    font-size: 16px;
  }
  .big-title {
    p {
      font-size: 40px;
    }
  }

  .subt {
    font-size: 16.6px;
  }

  .info-text {
    p {
      font-size: 16.6px;
    }
  }

  .empty-cart {
    .empty-cart-items {
      img {
        width: 133.3px;
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
@media screen and(min-height: 800px) and (max-height: 1024px) {
  .totals {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .btn-container {
    position: relative;
    bottom: 0;
    margin-bottom: 20px;
  }
  .back {
    font-size: 16px;
  }
  .total {
    font-size: 16px;
  }
  .big-title {
    p {
      font-size: 50px;
    }
  }

  .subt {
    font-size: 26.6px;
  }

  .info-text {
    p {
      font-size: 20px;
    }
  }

  .empty-cart {
    .empty-cart-items {
      img {
        width: 180px;
      }

      p {
        font-size: 26.6px;
      }

      .link {
        font-size: 26.6px;
      }
    }
  }
}

@media screen and(min-width: 1024px) and(max-width: 769px) {
  //Disenhomobile
}

@media screen and(min-width: 768px) and(max-width: 481px) {
  //Disenhomobile
}

@media screen and(min-width: 480px) and(max-width: 320px) {
  //Disenhomobile
}
</style>
