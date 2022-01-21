<template>
  <div id="home">
    <div class="main-container">
      <div class="grey-container">
        <appbar/>
        <home-info v-if="!createNewOrder"/>
        <t-shirt v-else/>
      </div>
      <div class="white-container">
        <div class="cart-img-container">
          <img class="cart-img" src="cart.png" alt="cart">
          <div v-if="orders.length > 0" class="counter">
            <p>{{ orders.length }}</p>
          </div>
        </div>
        <home-image v-if="!createNewOrder"/>
        <div v-else>
          <customize v-if="step === 1"/>
          <design-t-shirt v-if="step === 2"/>
          <order-created-message v-if="step === 3"/>
        </div>
      </div>
    </div>
    <cart/>
  </div>
</template>

<script>
import OrderCreatedMessage from '../components/OrderCreatedMessage'

export default {
  components: { OrderCreatedMessage },
  computed: {
    step: {
      get () {
        return this.$store.getters.step
      }
    },
    createNewOrder: {
      get () {
        return this.$store.getters.createNewOrder
      }
    },
    orders: {
      get () {
        return this.$store.getters.orders
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cart-img-container {
  position: relative;

  .counter {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: #D66A6A;
    z-index: 300;
    left: 93%;
    top: 10px;

    p {
      text-align: center;
      color: white;
      font-weight: bold;
    }
  }
}

.main-container {
  display: flex;
  height: auto;
}

.grey-container {
  height: 100vh;
  width: 48vw;
  background-color: #4E4E51;
  box-shadow: 10px 0px 4px rgb(204, 207, 207);
  position: relative;
  z-index: 200;
}

.white-container {
  height: 100vh;
  width: 52vw;
  position: relative;
}

.cart-img {
  position: absolute;
  z-index: 100;
  left: 90%;
  top: 20px;
}
</style>
