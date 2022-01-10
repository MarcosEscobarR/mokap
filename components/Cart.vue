<template>
  <div class="cart-container ">
    <div class="card">
      <div class="big-title">
        <p>Resumen de Pedido</p>
      </div>
      <div class="row">
        <div class="col">
          <p class="subt">
            Entregamos pedidos en la Zona Marcada
          </p>
          <div class="map" />
          <p class="subt">
            Detalles del envío
          </p>
          <div class="info-text">
            <p>
              El envío puede tardar hasta 24 hrs dependiendo de la carga de pedidos. Una
              vez confirmada la orden, atención al cliente se contactara contigo por WhatsApp para ultimar detalles
            </p>
          </div>
        </div>
        <div class="col d-flex justify-center align-center">
          <div class="card-items">
            <div class="empty-cart">
              <img src="sad%20face.png" alt="sad-face">
              <p>Tu carrito esta vacío</p>
              <p class="link">Agrega un Pedido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cart'
}
</script>

<style scoped lang="scss">
  .cart-container {
    width: 100vw;
    height: 100vh;
    background-color: #E0E0E0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 90%;
    height: 80%;
    background-color: white;
    border-radius: 25px;
    elevation: 1deg;
    box-shadow: 0 0 15px rgb(204,207,207);
    padding: 50px 60px;
  }

  .big-title {
    width: 100%;

    p {
      font-size: 60px;
      font-weight: bold;
      text-align: center;
      color: #8B8888;
    }
  }

  .subt {
    font-size: 25px;
    color: #4E4E51;
    font-weight: 400;
  }

  .map {
    height: 300px;
  }

  .info-text {
    width: 60%;
    p {
      font-size: 25px;
      font-weight: 300;
      color: #8B8888;
    }
  }

  .card-items {
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;

    img {
      width: 200px;
    }

    p {
      font-size: 25px;
      color: #4E4E51;
    }

    .link {
      color: #8B8888;
      font-size: 25px;
      text-decoration: underline;
      text-align: center;
    }
  }
</style>
