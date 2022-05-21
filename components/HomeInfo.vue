<template>
  <div ref="container" class="info-container">
    <div class="information">
      <div class="big-title">
        <p>HECHO POR HUMANOS, DISEÑADO POR ARTISTAS</p>
      </div>
      <div class="sub-title">
        <p>
          Remeras de la mejor calidad 100% algodón, estampadas con tecnologia DTG - lo último en impresión textil.
        </p>
      </div>
      <v-spacer />
      <div class="btn-container">
        <custom-button title="Haz tu pedido" @click="handleClick" />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HomeInfo',
  methods: {
    handleClick () {
      const { container } = this.$refs
      const timeline = gsap.timeline()
      timeline.to(container, 0.3, { opacity:0, x: -80 })
      this.$store.commit('createNewOrder', true)

      setTimeout(() => {
        timeline.to(container, 0, { opacity:1, x: 0 })
      }, 1000)
      
    }
  }
}

</script>

<style scoped lang="scss">

.btn-container {
  display: flex;
  justify-content: start;
  width: 100%;
  margin-top: auto;
  bottom: 0;
  right: 0;
}

.big-title {
  color: white;
  font-size: 6rem;
  line-height: 6.7rem;
  font-weight: 800;
  font-family: 'Poppins', 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  font-size: 1.2rem;
  color: #cccccc;
  font-weight: 400;
  margin-bottom: 3rem;
}

.info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 100px);
  width: 100%;
  position: relative;
}

.information {
  width: 450px;
  height: min-content;
}

// @media screen and (min-width:1200px) and (max-width: 1800px) {
//   .big-title {
//     font-size: 3.35rem;
//     line-height: 4rem;
//     font-weight: 800;
//   }
//   .sub-title {
//     font-size: 1rem;
//   }
// }

@media screen and (min-width:1025px) and (max-width: 1800px) {
  .big-title {
    font-size: 3.35rem;
    line-height: 4rem;
    font-weight: 800;
  }
  .sub-title {
    font-size: 1.1rem;
    max-width: 80%;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .big-title {
    font-size: 3rem;
    line-height: 3.8rem;
    font-weight: 800;
  }
  .sub-title {
    font-size: 1rem;
    max-width: 80%;
  }}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .information {
    width: 100%;
    display: flex;justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .big-title {
    font-size:3.5rem;
    text-align: center;
    width: 400px;
  }
  .sub-title {
    display: none;
  }
  .btn-container {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
}

@media screen and (max-width: 480px) and (min-width: 320px) {
  //Disenho mobile
}

</style>
