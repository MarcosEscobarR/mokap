<template>
  <div style="position: relative">
    <div id="navigator-container" class="main">
      <div class="">
        <p class="big-title">
          Customize su remera
        </p>
        <div class="t-shirt-container">
          <div class="img-container">
            <img :src="order.color === 'Blanco' ? 'Blanco%20-%20Hombre.png' : 'Negro%20-%20Hombre.png'" alt="blanco">
            <div v-if="order.image" :class="order.location === 'Centro' ? 'center-design-container' : 'chest-design-container'">
              <img :src="order.image" alt="design">
            </div>
          </div>
          <p class="price-title">
            Precio
          </p>
          <p class="price">
            Gs. {{ price.toLocaleString('es-es') }} 
          </p>
        </div>
      </div>

      <div v-if="showCheckboxes" class="customize-container">
        <v-checkbox v-model="orderModel.ownTShirt" label="Tengo mi propia remera" />
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
            @input="$store.commit('setOrder', {quantity: $event.target.value})"
          >
        </div>
        <div class="btn-container">
          <custom-button title="AGREGAR AL CARRITO" color="#D66A6A" @click="addToCart" />
        </div>
      </div>
      <div v-else class="btn-navigator-container">
        <custom-button-outlined class="ma-5" title="IR AL CARRITO" outlined />
        <custom-button title="OTRA ORDEN" @click="$store.commit('reset')"/>
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
        console.log(val)
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

.img-container{
  margin-top: 0.5rem;
}

.center-design-container {
  position: absolute;
  top: 54%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 120px;
    height: 120px;
  }
}

.chest-design-container {
  position: absolute;
  top: 36%;
  left: 62%;
  transform: translate(-50%, -50%);
  img {
    width: 50px;
    height: 50px;
  }
}
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
  margin-top: 60px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 60px);
}

.big-title {
  text-align: center;
  font-size: 2rem;
  line-height: 2.7rem;
  font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  font-weight: bold;
  color: #4E4E51;
  padding: 10px;
}

.t-shirt-container {
  height: 400px;
  border-radius: 10px;
  background-color: #4E4E51;
  width: 100%;
  display: flex;
  padding: 15px;
  flex-direction: column;

  .img-container {
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    img {
      height: 300px;
      object-fit: contain;
    }
  }
  .price {
    text-align: center;
    color: white;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }

  .price-title {
    margin-bottom: 0;
    margin-top: 10px;
    color: white;
    font-size: 1rem;
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
.quantity-input {
  p {
    color: #4E4E51;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0;
  }
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
