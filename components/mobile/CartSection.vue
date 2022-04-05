<template>
  <div class="cart">
    <div class="card">
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
          <div v-if="orders.length > 0 ">
            <cart-datatable :orders="orders"/>
            <div class="price-container">
              <p class="total-title">
                TOTAL
              </p>
              <p class="total">
                {{ total.toLocaleString('es-es') }}
              </p>
            </div>
            <custom-button title="Continuar" @click="finished = true"/>
          </div>
          <div class="delivery-details">
            <h3>Entregamos pedidos en la zona marcada</h3>
            <img src="map.png" alt="Area de cobertura">
            <h3>Detalles del envío</h3>
            <p>
              El envío puede tardar hasta 24 hrs. dependiendo de la carga de
              pedidos. Una vez confirmada la orden, atención al cliente contactará
              contigo por WhatsApp para ultimar detalles.
            </p>
          </div>
        </div>
        <div v-if="finished">
          <p class="title">
            Datos del cliente
          </p>
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
            <div class="form-divider">
              <form-select
                v-model="user.shippingMethod"
                label="Metodo de Envio"
                :items="shippingMethod"
                :rules="[validators.required]"
              />
              <form-input
                v-model="user.address"
                :disabled="user.shippingMethod === 'Retiro del Local'"
                label="Direccion"
                :rules="[validators.required]"
              />
            </div>
          </v-form>
          <p class="total-title">Entregamos los pedidos en la zona marcada </p>
          <div style="height: 400px"></div>
          <p class="total-title">Detalles del pedido</p>
          <p class="details-info">El envio puede tardar hasta 24 horas dependiendo de la carga de pedidos. Una vez confirmada la orden,
            atencion al cliente se contactara contigo por WhatsApp para ultimar detalles</p>
          <div class="price-container">
            <p class="total-title">
              TOTAL
            </p>
            <p class="total">
              {{ total.toLocaleString('es-es') }}
            </p>
          </div>
          <custom-button title="Finalizar" color="#D66A6A" @click="sendEmail"/>
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
    shippingMethod: ['Delivery', 'Retiro del Local']
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
    async sendEmail () {
      this.step = 2
      try {
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
  color: #8B8888;
  line-height: 1.9rem;
  font-size: 1.3rem;
}
.price-container {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: end;
  flex-direction: column;
}

.total-title {
  margin: 0;
  font-size: 1.5rem;
  display: block;
  font-weight: bold;
  color: #4E4E51;
}

.total {
  color: #4E4E51;
  font-weight: bold;
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
    font-size: 2rem;
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
