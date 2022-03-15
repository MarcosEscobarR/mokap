<template>
  <div class="cart">
    <div class="card">
      <div class="card__content">
        <h2>Resumen del pedido</h2>

        <div class="cart-overview">
          <div class="cart-overview__content">
            <img src="/sad face.png" alt="Carrito vacío">
            <span class="cart-overview__title">Tu carrito está vacío</span>
            <a href="#" class="cart-overview__action">Agregar un pedido</a>
          </div>
        </div>

        <div class="delivery-details">
          <h3>Entregamos pedidos en la zona marcada</h3>
          <img src="map.png" alt="Area de cobertura">
          <h3>Detalles del envío</h3>
          <p>
            El envío puede tardar hasta 24 hrs. dependiendo de la carga de
            pedidos. Una vez confirmada la orden, atención al cliente contactará
            contigo por WhatsApp para ultimar detalles.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  background-color: #f2f2f2;
  min-height: 100vh;
  margin: 0;
  padding: 1.25rem 0;
}

.card {
  background-color: #fff;
  width: 90%;
  margin: auto;
  border-radius: 0.75rem;
  font-size: 1.15rem;

  .card__content {
    width: 90%;
    padding: 1rem 0;
    margin: auto;
    text-align: center;
  }

  h2 {
    font-size: 2rem;
  }
}

.cart-overview {
  min-height: 400px;
  display: flex;
  align-items: center;

  .cart-overview__content {
    display: flex;
    flex-direction: column;
    width: 100%;

    img {
      margin: auto;
      width: 35%;
    }

    .cart-overview__title {
      margin-top: 1rem;
      font-size: 1.25rem;
    }

    .cart-overview__action {
      text-decoration: underline;
    }
  }
}

.delivery-details {
  h3 {
    margin-bottom: 0.5rem;
  }

  img {
    width: 100%;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
  }

  p {
    line-height: 1.75rem;
  }
}
</style>
