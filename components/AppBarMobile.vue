<template>
  <div class="appbar">
    <div class="img-container">
      <img class='logo-img' src="logo%20mokap.png" alt="logo" @click="$store.commit('reset')">
    </div>
    <div class="icons-container">
      <v-badge class="ma-4" color="#D66A6A" bordered :content="orders.length" :value="orders.length" overlap>
        <v-icon size="30" color="white" >
          mdi-cart
        </v-icon>
      </v-badge>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBarMobile',
  computed: {
    orders: {
      get () {
        return this.$store.getters.orders
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .appbar {
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 500;
    background-color: #4E4E51;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ma-4{
    margin-right: 0 !important;
  }

  .img-container {
    height: 100%;
    display: flex;

    img {
      object-fit: contain;
      width: 175px;
      align-self: end;
    }

    .logo-img{
      margin: auto;
    }


  }

  .icons-container {
    display: flex;
    padding-right: 20px;
  }
</style>
