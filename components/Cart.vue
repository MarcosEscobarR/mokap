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
            <v-data-table
              hide-default-footer
              :headers="datatableHeaders"
              :items="orders"
            >
              <template #header.quantity>
                <p class="subt">
                  Cantidad
                </p>
              </template>
              <template #header.total>
                <p class="subt">
                  Total
                </p>
              </template>
              <template #item.tshirt="{item}">
                <div class="info-text">
                  <p>
                    {{ item.TShirtBasic ? 'Remera Básica' : 'Remera con Diseño' }}
                  </p>
                </div>
              </template>
              <template #item.total="{item}">
                <div class="info-text">
                  <p>
                    {{ item.quantity * 25000 }}
                  </p>
                </div>
              </template>
              <template #item.quantity="{item}">
                <div class="info-text">
                  <p>
                    {{ item.quantity }}
                  </p>
                </div>
              </template>
              <template #item.remove="{item}">
                <v-btn icon @click="$store.commit('removeOrder', item)">
                  <v-icon size="50px">
                    mdi-trash-can-outline
                  </v-icon>
                </v-btn>
              </template>
            </v-data-table>
            <div class="d-flex justify-end mt-4">
              <p class="subt" style="font-size: 35px">
                TOTAL
              </p>
            </div>
            <p class="total">
              {{ orders.reduce((a,b) => a + b.quantity * 25000, 0) }}
            </p>
            <div class="btn-container">
              <custom-button title="Continuar" @click="step = 2" />
            </div>
          </div>

          <div v-if="step === 2" class="cart-items">
            <p class="subt">
              Datos del Cliente
            </p>
            <div style="width: 800px">
              <form-input v-model="user.name" label="Nombre" />
              <form-input v-model="user.email" label="Email" />
              <form-input v-model="user.phone" label="Celular" />
              <form-input v-model="user.ruc" label="Ruc" />
              <form-select v-model="user.payment" label="Forma de Pago" :items="payment" />

              <div class="d-flex justify-end mt-4">
                <p class="subt" style="font-size: 35px">
                  TOTAL
                </p>
              </div>
              <p class="total">
                {{ orders.reduce((a,b) => a + b.quantity * 25000, 0) }}
              </p>
            </div>
            <div class="btn-container">
              <p class="back" @click="step = 1">
                Atras
              </p>
              <custom-button title="Finalizar" color="#D66A6A" @click="step = 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
export default {
  name: 'Cart',
  components: { FormSelect, FormInput, CustomButton },
  data: () => ({
    step: 1,
    user: {},
    payment: ['Efectivo', 'Transferencia'],
    datatableHeaders: [
      {
        text: '',
        value: 'tshirt'
      },
      {
        text: 'Cantidad',
        value: 'quantity',
        cellClass: 'header-text'
      },
      {
        text: 'Total',
        value: 'total',
        cellClass: 'header-text'
      },
      {
        text: '',
        width: '50',
        value: 'remove'
      }
    ]
  }),
  computed: {
    orders: {
      get () {
        return this.$store.getters.orders
      }
    }
  },
  methods: {
    sendEmail () {
    },
    addNewOrder () {
      this.$store.commit('createNewOrder', true)
      this.$store.commit('reset')
    }
  }
}
</script>

<style scoped lang="scss">
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
    overflow: auto;
  }
  .card {
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 25px;
    elevation: 1deg;
    box-shadow: 0 0 15px rgb(204,207,207);
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
    font-size: 25px;
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
</style>
