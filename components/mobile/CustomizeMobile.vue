<template>
  <div style="position: relative">
    <div id="navigator-container" class="main">
      <div class="">
        <p class="big-title">
          Customize su remera
        </p>
        <div class="t-shirt-container">
          <img :src="order.color === 'Blanco' ? 'Blanco%20-%20Hombre.png' : 'Negro%20-%20Hombre.png'" alt="blanco">
          <p class="price-title">
            Precio
          </p>
          <p class="price">
            {{ price.toLocaleString() }} Gs.
          </p>
        </div>
      </div>

      <div v-if="showCheckboxes" class="customize-container">
        <v-checkbox label="Tengo mi propia remera" />
        <div class="checkboxes">
          <p>Color</p>
          <color-checkbox v-model="orderModel.color" />
        </div>
        <div class="checkboxes">
          <p>Tamaño</p>
          <size-checkbox v-model="orderModel.size" />
        </div>
        <div class="checkboxes">
          <p>Calidad de tela</p>
          <mobile-fabric-quality-checkbox v-model="orderModel.quality" />
        </div>
        <div class="checkboxes">
          <p>Diseño</p>
          <mobile-design-checkbox v-model="orderModel.design" />
        </div>
        <div class="checkboxes">
          <p>Ubicación</p>
          <mobile-location-checkbox v-model="orderModel.location" />
        </div>
        <div class="quantity-input">
          <p>Cantidad</p>
          <input
            class="quantity"
            type="number"
            value="1"
          >
        </div>
        <div class="btn-container">
          <custom-button title="AGREGA SU PEDIDO" color="#D66A6A" @click="addToCart" />
        </div>
      </div>
      <div v-else class="btn-navigator-container">
        <custom-button class="ma-5" title="IR AL CARRITO" outlined />
        <custom-button title="OTRA ORDEN"  />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    orderModel: {},
    showCheckboxes: true
  }),
  computed: {
    price: {
      get () {
        return this.$store.getters.price
      }
    },
    order: {
      get () {
        return this.$store.getters.order
      }
    }
  },
  watch: {
    orderModel: {
      handler (val) {
        this.$store.commit('setOrder', val)
      },
      deep: true
    }
  },
  methods: {
    addToCart () {
      this.$store.commit('newOrder')
      this.showCheckboxes = false
      window.location.href = '#home'
    }
  }
}

</script>

<style scoped lang="scss">
.btn-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.customize-container {
  padding: 10px;
}
.btn-navigator-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.main {
  margin-top: 100px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 100px);
}

.big-title {
  text-align: center;
  font-size: 2.3rem;
  line-height: 2.7rem;
  font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  font-weight: bold;
  color: #4E4E51;
  padding: 10px;
}

.t-shirt-container {
  height: 430px;
  border-radius: 10px;
  background-color: #4E4E51;
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;

  .img {
    height: 300px;
    object-fit: contain;
  }

  .price {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    margin: 0;
  }

  .price-title {
    margin-bottom: 0;
    margin-top: 15px;
    color: white;
    font-size: .9rem;
    text-align: center;
  }
}
.quantity {
  border: 2px solid #E0E0E0;
  width: 80px;
  height: 40px;
  padding: 10px 0 10px 10px;
  border-radius: 6px;
  color: #8B8888;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  opacity: 1;
  height: 50px;
  padding: 2px;
}

input[type=number]
{
  -moz-appearance: textfield;
}
.checkboxes {
  margin-bottom: 15px;

  p {
    color: #4E4E51;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0;
  }
}

</style>
