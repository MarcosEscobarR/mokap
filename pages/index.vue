<template>
  <div id="home">
    <div class="main-container">
      <div class="grey-container">
        <appbar />
        <home-info v-show="!show" />
        <t-shirt v-show="show" />
      </div>
      <div class="white-container">
        <div class="cart-img-container">
          <img class="cart-img" src="cart.png" alt="cart" @click="goToCart">
          <div v-if="orders.length > 0" class="counter">
            <p>{{ orders.length }}</p>
          </div>
        </div>
        <home-image v-show="!show" ref="container" />
        <div v-show="show">
          <customize v-if="step === 1" />
          <design-t-shirt v-if="step === 2" />
          <order-created-message v-if="step === 3" />
        </div>
      </div>
    </div>
    <div class="cart">
      <cart />
    </div>
    <div class="cart-mobile">
      <cart-mobile />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import OrderCreatedMessage from '../components/OrderCreatedMessage'
export default {
  components: { OrderCreatedMessage },
  data: () => ({
    show: false
  }),
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
  },
  watch: {
    createNewOrder () {
      const timeline = gsap.timeline()
      timeline.to(this.$refs.container, 0.5, { x: 1000 })
      setTimeout(() => {
        this.show = !this.show
        timeline.to(this.$refs.container, 0.5, { x: 0 })
      }, 1000)
    }
  },
  methods: {
    goToCart () {
      window.location.href = '/#cart'
    }
  }
}
</script>

<style scoped lang="scss">
.cart {
  display: block;
}
.cart-mobile {
  display: none;
}
.cart-img-container {
  position: relative;
  cursor: pointer;
  img {
    width: 60px;
  }
  .counter {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #D66A6A;
    z-index: 300;
    left: 93%;
    top: 10px;

    p {
      font-size: 12px;
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
  min-height: 650px;
  width: 48vw;
  background-color: #4E4E51;
  box-shadow: 5px 0px 6px rgba($color: #616161, $alpha: 0.3);
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

@media screen and (min-width:1025px) and (max-width: 1200px) {
  .cart-img {
    width: 50px;
    left: 80%;
  }

  .cart-img-container {
    .counter {
      left: 83%;
      width: 25px;
      height: 25px;
    }
  }
}
@media screen and (min-height: 800px) and (max-height: 1024px) {
  .cart-img {
    width: 70px;
  }

  .cart-img-container {
    .counter {
      width: 25px;
      height: 25px;
    }
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .cart-img {
    width: 50px;
  }

  .cart-img-container {
    right: 20px;
    .counter {
      width: 25px;
      height: 25px;
    }
  }}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .grey-container {
    //z-index: 220;
    opacity: 0.95;
    width: 100vw;
  }
  .white-container {
    width: 100vw;
    position: absolute;
  }

  .cart-img-container{
    display: none;
  }

  .cart-mobile {
    display: block;
  }
  .cart {
    display: none;
  }
}

@media screen and (max-width: 480px) and (min-width: 320px) {
  //Disenho mobile
}
</style>
