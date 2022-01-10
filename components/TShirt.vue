<template>
  <div class="container">
    <div class="img-container">
      <img src="Blanco%20-%20Hombre.png" alt="white-tshirt">
    </div>
    <div class="price-container">
      <span class="price-title">Precio</span>
      <span class="price">25.000 Gs</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TShirt'
}
</script>

<style scoped lang="scss">
.container {
  height: calc(100% - 100px);
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.img-container {

  img {
    width: 900px;
    height: 900px;
    overflow: hidden;
    object-fit: contain;
  }
}

.price-container {
  width: 100%;
  margin-bottom: 50px;
  .price-title {
    display: block;
    color: #e0e0e0;
    font-size: 35px;
    font-family: 'Open Sans - Bold',"Roboto", sans-serif;
    text-align: center;
    margin: 0;
    line-height: normal;
  }

  .price {
    display: block;
    font-size: 80px;
    color: white;
    font-family: 'Open Sans - Bold',"Roboto", sans-serif;
    font-weight: bold;
    text-align: center;
    margin: 0;
    line-height: normal;
  }
}
</style>
