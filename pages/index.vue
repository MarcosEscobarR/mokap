<template>
  <div>
    <div class="main-container">
      <div class="grey-container">
        <appbar />
        <home-info v-if="!createNewOrder" />
        <t-shirt v-else />
      </div>
      <div class="white-container">
        <home-image v-if="!createNewOrder" />
        <div v-else>
          <img src="cart.png" class="cart-img" alt="cart">
          <customize v-if="step === 1" />
          <design-t-shirt v-else />
        </div>
      </div>
    </div>
    <cart />
  </div>
</template>

<script>
export default {
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
    }
  }
}
</script>

<style scoped lang="scss">
    .main-container {
      display: flex;
      height: auto;
    }
    .grey-container {
      height: 100vh;
      width: 48vw;
      background-color: #4E4E51;
      box-shadow: 10px 0px 4px rgb(204,207,207);
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
