<template>
  <div class="cart">
    <div class="card" id="card_section">
      <div class="card__content">
        <h2>Resumen del pedido</h2>

        <div v-if="orders.length === 0" class="cart-overview">
          <div class="cart-overview__content">
            <img src="/sad face.png" alt="Carrito vacío">
            <span class="cart-overview__title">Tu carrito está vacío</span>
            <a href="#" class="cart-overview__action">Agregar un pedido</a>
          </div>
        </div>

        <div v-if=" !finished" class="pb-4">
          <div v-if="orders.length > 0 " class="pb-4">
            <cart-datatable :orders="orders" />
            <div class="price-container">
              <p class="total-price">
                TOTAL
              </p>
              <p class="total">
                Gs. {{ total.toLocaleString('es-es') }}
              </p>
            </div>
            <custom-button title="Continuar" @click="finished = true" />
          </div>
          <div class="delivery-details">
            <h3>Zona de entrega</h3>
            <img class= "img-map" src="map.png" alt="Area de cobertura">
            <h3>Detalles del delivery</h3>
            <p class="details-info">
              El envío tiene un costo fijo de <span>Gs.15.000</span> y puede tardar hasta 24 horas dependiendo de la carga de
              pedidos. Una vez confirmada la orden, atención al cliente contactará
              contigo por WhatsApp para ultimar detalles.
            </p>
          </div>
        </div>
        <div v-if="finished">
          <h3>Datos del cliente</h3>
          <v-form v-model="valid">
            <form-input v-model="user.name" label="Nombre" :rules="[validators.required]" />
            <form-input type="email" v-model="user.email" label="Email" :rules="[validators.email]" />
            <div class="form-divider">
              <form-input v-model="user.phone" label="Celular" :rules="[validators.number, validators.required]" />
              <form-input v-model="user.ruc" label="RUC/CI" :rules="[]" />
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
                label="Metodo de envío"
                :items="shippingMethod"
                :rules="[validators.required]"
              />
              <form-input
                v-model="user.address"
                :disabled="user.shippingMethod === 'Retiro del local'"
                label="Dirección"
                :rules="user.shippingMethod === 'Retiro del local' ? false : [validators.required]"
              />
            </div>
          </v-form>
          <div class="delivery-details">
            <h3>Zona de entrega</h3>
            <img class= "img-map" src="map.png" alt="Area de cobertura">
            <h3>Detalles del delivery</h3>
             <p class="details-info">
              El envío tiene un costo fijo de <span>Gs.15.000</span> y puede tardar hasta 24 horas dependiendo de la carga de
              pedidos. Una vez confirmada la orden, atención al cliente contactará
              contigo por WhatsApp para ultimar detalles.
            </p>
          </div>
          <div class="price-container">
            <p class="total-price">
              TOTAL
            </p>
            <p class="total">
              Gs. {{ total.toLocaleString('es-es') }}
            </p>
          </div>
          <custom-button :disabled="!valid" title="Finalizar" color="#D66A6A" @click="sendEmail" />
          <order-sent-dialog v-model="showDialog" @change="dialogClosed" />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Validators } from '@/shared/validators'

export default {

  data: () => ({
    finished: false,
    user: {},
    validators: Validators,
    valid: false,
    payment: ['Efectivo', 'Transferencia'],
    shippingMethod: ['Delivery', 'Retiro del local'],
    showDialog: false
  }),
  computed: {
    orders () {
      return this.$store.getters.orders
    },
    total () {
      return this.$store.getters.total
    }
  },
  methods: {
    dialogClosed () {
      this.$store.commit('resetCart')
      this.step = 1
      this.finished = false
      window.location.href = '#home'
    },
    async sendEmail () {
      this.step = 0
      try {
        console.log(this.user)
        if (Object.values(this.user).includes(null)) {
          return
        }
        this.$store.commit('setLoading')
        const model = {
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
    addOrder () {
      this.$store.commit('nextStep')
    }
  }
}
</script>

<style lang="scss" scoped>


.details-info {
  color: #666666;
  line-height: 1.7rem;
  font-size: 1.1rem;
  margin-bottom: 3rem;

  span{
    text-decoration: underline;
  }
}
.price-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.total-title {
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
  color: #4E4E51;
}

.total-price{
  font-weight: 500;
  color: #4E4E51;
  margin-bottom: 0;
}

.total {
  color: #4E4E51;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 0.3rem;
}

.cart {
  background-color: #f2f2f2;
  min-height: 100vh;
  margin: 0;
  padding: 1.25rem 0;
}

.card {
  background-color: #fff;
  width: 90%;
  margin: auto;
  border-radius: 0.75rem;
  font-size: 1.15rem;

  .card__content {
    width: 90%;
    padding: 1rem 0;
    margin: auto;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    color:#4E4E51;
  }
}


.cart-overview {
  min-height: 400px;
  display: flex;
  align-items: center;

  .cart-overview__content {
    display: flex;
    flex-direction: column;
    width: 100%;

    img {
      margin: auto;
      width: 35%;
      max-width: 150px;
    }

    .cart-overview__title {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    .cart-overview__action {
      text-decoration: underline;
      color: #8B8888;
    }
  }
}

.delivery-details {

  margin-top: 1.5rem;
  h3 {
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.75rem;
  }
}
</style>
