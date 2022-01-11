<template>
  <div>
    <div class="main-container">
      <div class="grey-container">
        <appbar />
<!--        <home-info />-->
        <t-shirt/>
      </div>
      <div class="white-container">
<!--        <home-image />-->
        <img src="cart.png" class="cart-img" alt="cart">
        <customize/>
      </div>
    </div>
    <cart />
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
    .main-container {
      display: flex;
      height: auto;
    }
    .grey-container {
      height: 100vh;
      width: 50vw;
      background-color: #4E4E51;
      box-shadow: 10px 0px 4px rgb(204,207,207);
      position: relative;
      z-index: 200;
    }
    .white-container {
      height: 100vh;
      width: 50vw;
      position: relative;
    }
    .cart-img {
      position: absolute;
      z-index: 100;
      left: 90%;
      top: 20px;
    }
</style>
