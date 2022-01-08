<template>
  <div>
    <div class="main-container">
      <div class="grey-container">
        <appbar/>
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
      </div>
      <div class="white-container">
        <img src="imagen%20principal.png" class="big-img">
        <img src="cart.png" class="cart-img">
      </div>
    </div>
    <cart/>
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

  .white-container .big-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: fill;
    position: absolute;
    z-index: 50;
  }

  .white-container .cart-img {
    position: absolute;
    z-index: 100;
    left: 90%;
    top: 20px;
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
