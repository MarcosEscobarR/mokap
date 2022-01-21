<template>
  <div class="container">
    <div>
      <div class="img-container">
        <div v-if="order.image" :class="order.location === 'Centro' ? 'center-design-container' : 'chest-design-container'">
          <img :src="order.image" alt="design">
        </div>
        <img v-if="order.color === 'Blanco'" src="Blanco%20-%20Hombre.png" alt="white-tshirt">
        <img v-else src="Negro%20-%20Hombre.png" alt="black-tshirt">
      </div>
    </div>
    <div class="price-container" v-if="!order.TShirtBasic">
      <span class="price-title">Precio</span>
      <span class="price">25.000 Gs</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TShirt',
  computed: {
    order: {
      get () {
        return this.$store.getters.order
      }
    }
  }
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
  position: relative;
  img {
    width: 900px;
    height: 900px;
    overflow: hidden;
    object-fit: contain;
  }
}

.center-design-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 450px;
    height: 450px;
    size: 450px;
  }
}

.chest-design-container {
  position: absolute;
  top: 35%;
  left: 65%;
  transform: translate(-50%, -50%);
  img {
    width: 170px;
    height: 170px;
    size: 120px;
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
