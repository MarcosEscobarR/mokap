<template>
  <div class="info-container">
    <div class="information">
      <div class="big-title">
        <p>HECHO POR HUMANOS, DISEÑADO POR ARTISTAS</p>
      </div>
      <div class="sub-title">
        <p>
          Remeras de la mejor calidad 100% algodón, estampadas con tecnologia DTG - lo ultimo en impresión textil.
        </p>
      </div>
      <v-spacer/>
      <div class="btn-container">
        <custom-button title="Haz tu Pedido >" @click="$store.commit('createNewOrder', true)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo'
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
  font-size: 80px;
  font-weight: bold;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  color: white;
  font-size: 30px;
  font-weight: 200;
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
  width: 60%;
  height: min-content;
}

@media screen and (min-width:1025px) and (max-width: 1200px) {
  .big-title {
    font-size: 50px;
  }
  .sub-title {
    font-size: 19px;
  }
}
@media screen and (min-height: 800px) and (max-height: 1024px) {
  .big-title {
    font-size: 65px;
  }
  .sub-title {
    font-size: 32px;
  }
}

@media screen and (min-height: 1024px) and (max-height: 1200px) {
  .big-title {
    font-size: 65px;
  }
  .sub-title {
    font-size: 32px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .big-title {
    font-size: 45px;
  }
  .sub-title {
    font-size: 15px;
  }}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .big-title {
    font-size: 45px;
    text-align: center;
  }
  .sub-title {
    display: none;
  }
}

@media screen and (max-width: 480px) and (min-width: 320px) {
  //Disenho mobile
}

</style>
