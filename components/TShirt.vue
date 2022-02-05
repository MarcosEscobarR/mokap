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
    <div class="price-container">
      <span class="price-title">Precio</span>
      <span class="price">{{total.toLocaleString()}} Gs</span>
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
    },
    total: {
      get() {
        return this.$store.getters.total
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

@media screen and(min-width:1700px)and(max-width:1200px){
  .container {
    justify-content: space-around;
  }
  .img-container {
    img {
      width: 420px;
      height: 420px;
    }
  }

  .price-container {
    .price-title {
      font-size: 25px;
    }
    .price {
      font-size: 57px;
    }
  }

  .center-design-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 320px;
      height: 320px;
      size: 450px;
    }
  }

  .chest-design-container {
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translate(-50%, -50%);
    img {
      width: 150px;
      height: 150px;
      size: 120px;
    }
  }
}

@media screen and(min-height: 800px) and (max-height: 1024px){
  .container {
    justify-content: space-around;
  }
  .img-container {
    img {
      width: 650px;
      height: 650px;
    }
  }

  .price-container {
    .price-title {
      font-size: 25px;
    }
    .price {
      font-size: 57px;
    }
  }

  .center-design-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 350px;
      height: 350px;
    }
  }

  .chest-design-container {
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translate(-50%, -50%);
    img {
      width: 130px;
      height: 130px;
      size: 120px;
    }
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  .container {
    justify-content: space-around;
  }
  .img-container {
    img {
      width: 360px;
      height: 360px;
    }
  }

  .price-container {
    .price-title {
      font-size: 22px;
    }
    .price {
      font-size: 45px;
    }
  }

  .center-design-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 180px;
      height: 180px;
      size: 450px;
    }
  }

  .chest-design-container {
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translate(-50%, -50%);
    img {
      width: 60px;
      height: 60px;
      size: 120px;
    }
  }
}

@media screen and(max-width:768px)and(min-width:481px){
  .container {
    justify-content: space-around;
  }
  .img-container {
    img {
      width: 360px;
      height: 360px;
    }
  }

  .price-container {
    .price-title {
      font-size: 22px;
    }
    .price {
      font-size: 45px;
    }
  }

  .center-design-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 180px;
      height: 180px;
      size: 450px;
    }
  }

  .chest-design-container {
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translate(-50%, -50%);
    img {
      width: 60px;
      height: 60px;
      size: 120px;
    }
  }}

@media screen and(max-width:480px)and(min-width:320px){
  //Disenhomobile
}
</style>
