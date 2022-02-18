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
      <v-spacer />
      <div class="btn-container">
        <custom-button title="Haz tu Pedido" @click="$store.commit('createNewOrder', true)" />
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
  font-size: 3.35rem;
  line-height: 4.5rem;
  font-weight: 800;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  font-size: 1.2rem;
  color: #e0e0e0;
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
  width: 400px;
  height: min-content;
}

@media screen and (min-width:1025px) and (max-width: 1200px) {
  .big-title {
    font-size: 3.35rem;
    line-height: 4rem;
    font-weight: 800;
  }
  .sub-title {
    font-size: 1rem;
  }

  .information {
    width: 300px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .big-title {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  .sub-title {
    font-size: .8rem;
  }}

.information {
  width: 300px;
}

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
