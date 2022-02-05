<template>
  <div id="cart" class="cart-container ">
    <div class="card">
      <div class="big-title">
        <p>Resumen de Pedido</p>
      </div>
      <div style="height: 100%">
        <div >
          <div v-if="orders.length === 0" class="empty-cart">
            <div class="empty-cart-items">
              <img src="sad%20face.png" alt="sad-face">
              <p>Tu carrito esta vacío</p>
              <a class="link" href="#home" @click="addNewOrder">
                Agrega un Pedido
              </a>
            </div>
          </div>
          <div >
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
                <div class="form-divider">
                  <form-input v-model="user.phone" label="Celular" :rules="[validators.number, validators.required]"/>
                  <form-input v-model="user.ruc" label="Ruc" :rules="[validators.required]"/>
                </div>
                <form-select v-model="user.payment" label="Forma de Pago" :items="payment" :rules="[validators.required]" />
              </v-form>

              <div class="totals">
                <div class="btn-container">
                  <p class="back" @click="step = 1">
                    Atras
                  </p>
                  <custom-button :disabled="!valid" title="Finalizar" color="#D66A6A" @click="sendEmail" />
                  <order-sent-dialog v-model="showDialog" @change="dialogClosed" />
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
    showDialog: true,
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
        this.$store.commit('setLoading')
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
.form-group {
  width: 100%;
}
.form-divider{
  display: block;
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
  height: auto;
  padding: 20px 0;
  background-color: #E0E0E0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card {
  width: 90%;
  background-color: white;
  border-radius: 25px;
  elevation: 1deg;
  box-shadow: 0 0 15px rgb(204, 207, 207);
  padding: 50px 60px;
}

.big-title {
  width: 100%;

  p {
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    color: #8B8888;
  }
}

.subt {
  font-size: 28px;
  color: #4E4E51;
  font-weight: 400;
  text-align: center;
}

.map {
  height: 300px;
}

.info-text {

  p {
    font-size: 25px;
    font-weight: 300;
    color: #8B8888;
    text-align: center;
  }
}

.empty-cart {
  height: 400px;
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
      width: 120px;
      padding: 20px 0;
    }

    p {
      font-size: 22px;
      color: #4E4E51;
    }

    .link {
      color: #8B8888;
      font-size: 22px;
      text-decoration: underline;
      text-align: center;
    }
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
