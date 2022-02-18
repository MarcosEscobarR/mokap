<template>
  <div class="appbar">
    <div class="img-container">
      <img src="logo%20mokap.png" alt="logo">
    </div>
    <div class="icons-container">
      <v-icon x-large class="mx-2" color="white">
        mdi-cart
      </v-icon>
      <v-icon x-large color="white">
        mdi-menu
      </v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBarMobile'
}
</script>

<style scoped lang="scss">
  .appbar {
    width: 100%;
    height: 100px;
    position: fixed;
    z-index: 500;
    background-color: #4E4E51;
    opacity: 0.95;
    display: flex;
    justify-content: space-between;
  }

  .img-container {
    height: 100%;
    display: flex;

    img {
      object-fit: contain;
      width: 250px;
      align-self: end;
    }
  }

  .icons-container {
    display: flex;
    padding-right: 20px;
  }
</style>
