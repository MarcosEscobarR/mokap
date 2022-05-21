<template>
  <div class="hero">
    <div class="hero__content">
      <h1>Hecho por humanos, diseñado por artistas</h1>
      <custom-button class= "button" title="Haz tu pedido" @click="handleClick" />
    </div>
    <div class="img_main">
      <img class= "main-img" src="static/imagen principal.png" alt="">
    </div>

    <!-- <div class="hero__overlay" /> -->
  </div>

</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$store.commit('createNewOrder', true)
      this.$store.commit('nextStep', 2)
    }
  }
}
</script>
<style scoped lang="scss">
.hero {
  // position: relative;
  // height: 100vh;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // text-align: center;
  // padding-left: 20px;
  
  // background-image: url('/imagen principal.png');
  // background-size: cover;
  // background-position-x: -270px;
  // z-index: 1;
}


.hero__content {
  // margin-top: 100px;
  height: 80vh;
  z-index: 3;
  background-color: #4e4e51;
  padding-left: 20px;
  box-shadow: 0px 8px 8px rgba($color: #000000, $alpha: 0.1);

  h1 {
    color: white;
    font-size: 2.8rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
    margin-top: 23vh;
    line-height: 3.5rem;
    max-width: 450px;
  }
}

.img_main{
  width: 100%;
  height: 27.5rem;
  object-fit: contain;
  background-image: url('static/imagen principal  mobile.jpeg');
  background-size: cover;
 

  .main-img{
    width: 100%;
    height: 100%;
  }
}

.button{
  padding-left: 0 !important;
  margin-top: 1rem;
  max-width: 11rem;
}

</style>
