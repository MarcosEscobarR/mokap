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
      <button class="btn">
        Haz tu Pedido >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeInfo'
}
</script>

<style scoped lang="scss">

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
}

.information {
  width: 60%;
  height: min-content;
}

.btn {
  elevation: 0;
  border: 0;
  width: 350px;
  height: 70px;
  border-radius: 10px;
  color: white;
  background-color: #43BFA2;
  font-size: 25px;
}
</style>
