<template>
  <div class="container">
    <div class="main">
      <div>
        <p class="big-title">
          Customize su remera
        </p>

        <div class="item">
          <p class="sub-title">
            Diseño
          </p>
          <design-checkbox />
        </div>

        <div class="item">
          <p class="sub-title">
            Ubicación
          </p>
          <location-checkbox />
        </div>

        <div class="item">
          <p class="sub-title">
            Cantidad
          </p>
          <input
            type="number"
            class="quantity"
            :value="order.quantity"
            min="1"
            @input="$store.commit('setOrder', {quantity: $event.target.value})"
          >
        </div>
      </div>
    </div>
    <div class="btn-container">
      <div class="navigator">
        <div class="dots-container">
          <navigator-dots class="mb-4" />
        </div>
      </div>
      <div class="btns">
        <p class="back" @click="$store.commit('nextStep', 1)">
          Atrás
        </p>
        <custom-button title="Agregar al carrito" color="#D66A6A" @click="addToCart" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { OrderModel } from '~/models/OrderModel'
export default Vue.extend({
  name: 'DesignTShirt',
  computed: {
    order (): OrderModel {
      return this.$store.getters.order
    }
  },
  methods: {
    addToCart () {
      this.$store.commit('newOrder')
      this.$store.commit('nextStep', 3)
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  width: 450px;
  height: 550px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.big-title {
  font-weight: bold;
  font-size: 2.2rem;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: #4E4E51;
  margin-bottom: 0.3rem;
  margin-top: 0.7rem;
}
.checkbox-label {
  font-size: 1.2rem;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.item {
  padding: 5px 0;
}

.navigator {
  display: flex;
  width: 100%;
}

.btn-container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  position: absolute;
  background-color: white;
  bottom: 20px;
  align-items: center;
  .btns {
    width: 450px;
    display: flex;
    justify-content: end;

    .custom-btn-container {
      width: 200px;
    }

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
}

.dots-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity {
  border: 2px solid #E0E0E0;
  width: 80px;
  height: 60px;
  padding: 10px 0 10px 20px;
  border-radius: 6px;
  color: #8B8888;
  font-size: 20px;
  font-weight: 500px;
}
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    opacity: 0.5;
    height: 50px;
    padding: 2px;
  }

input[type=number]
{
  -moz-appearance: textfield;
}

@media screen and(min-width:1025px) and(max-width: 1200px) {
  .container {
    width: 90%;
  }
  .big-title {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .sub-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .item {
    padding: 5px 0;
  }
  .btn-container {
    .back {
      font-size: 20px;
    }
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .container {
    width: 90%;
  }
  .big-title {
    font-size: 35px;
  }

  .sub-title {
    font-size: 25px;
  }
  .main {
    width: 350px;
  }
  .item {
    padding: 2px 0;
  }
  .btn-container {
    bottom: 50px;
  .btns {
    width: 350px;
  }
    .back {
      font-size: 20px;
    }
  }
  .quantity {
    height: 60px;
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
  //Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
