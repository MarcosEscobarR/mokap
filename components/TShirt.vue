<template>
  <div ref="container" class="container">
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
      <span class="price">Gs. {{ price.toLocaleString('es-es') }} </span>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'TShirt',
  computed: {
    order: {
      get () {
        return this.$store.getters.order
      }
    },
    createNewOrder: {
      get () {
        return this.$store.getters.createNewOrder
      }
    },
    price: {
      get () {
        return this.$store.getters.price
      }
    }
  },
  watch: {
    createNewOrder () {

    
      const timeline = gsap.timeline()

      setTimeout(() => {
        timeline.from(this.$refs.container, 0.3, { opacity:0, x: -80 })
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  // height: calc(100% - 15.5rem);
  height: 100%;
  width: 100%;
  padding-bottom: 8rem;
  display: flex;
  justify-content: center;
  // align-items: center;
  flex-direction: column;
}

.img-container {
  position: relative;
  width: 70%;
  max-width: 600px;
  margin: 0 auto;
  min-width: 430px;
  img {
    width: 100%;
    height: 700px;
    overflow: hidden;
    object-fit: contain;
    margin: 0 auto;
  }
}

.center-design-container {
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 230px;
    height: 230px;
    size: 450px;
  }
}

.chest-design-container {
  position: absolute;
  top: 31%;
  left: 65%;
  transform: translate(-60%, -20%);
  img {
    width: 60px;
    height: 60px;
    size: 120px;
  }
}
.price-container {
  width: 100%;
  // margin-top: 3rem;
  position: absolute;
  bottom: 5rem;
  .price-title {
    display: block;
    color: #e0e0e0;
    font-size: 2.2rem;
    font-family: 'Open Sans - Bold',"Roboto", sans-serif;
    text-align: center;
    margin: 0;
    line-height: normal;
  }

  .price {
    display: block;
    font-size: 2.5rem;
    color: white;
    font-family: 'Open Sans - Bold',"Roboto", sans-serif;
    font-weight: bold;
    text-align: center;
    margin: 0;
    line-height: normal;
  }
}

@media screen and(min-width:1025px)and(max-width:1200px){
  .container {
    justify-content: space-around;
  }


  .price-container {
    .price-title {
      font-size: 2rem;
    }
    .price {
      font-size: 2.2rem;
    }
  }

  .center-design-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 200px;
      height: 200px;
      size: 450px;
    }
  }

  .chest-design-container {
    position: absolute;
    top: 35%;
    left: 65%;
    transform: translate(-50%, -30%);
    img {
      width: 60px;
      height: 60px;
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
    bottom: 25px;
    .price-title {
      font-size: 22px;
    }
    .price {
      font-size: 45px;
    }
  }

  .center-design-container {
    position: absolute;
    top: 35%;
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
    top: 25%;
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

@media screen and (max-height: 700px){
//   .img-container {
//     img {
//       height: 400px;
//       width: 400px;
//     }
//   }
//   .center-design-container {
//     position: absolute;
//     top: 35%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     img {
//       width: 150px;
//       height: 150px;
//     }
//   }

//   .chest-design-container {
//     position: absolute;
//     top: 25%;
//     left: 65%;
//     transform: translate(-50%, -50%);
//     img {
//       width: 70px;
//       height: 70px;
//       size: 120px;
//     }
// }
}
</style>
