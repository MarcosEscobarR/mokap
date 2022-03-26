<template>
  <div style="position: relative">
    <div class="main">
      <p class="big-title">
        Customize su remera
      </p>
      <div class="t-shirt-container">
        <img src="Blanco%20-%20Hombre.png" alt="blanco">
        <p class="price-title">
          Precio
        </p>
        <p class="price">
          {{ total.toLocaleString() }} Gs.
        </p>
      </div>

      <v-checkbox label="Tengo mi propia remera"></v-checkbox>
      <div class="checkboxes">
        <p>Color</p>
        <color-checkbox/>
      </div>
      <div class="checkboxes">
        <p>Calidad de tela</p>
        <fabric-quality-checkbox/>
      </div>
      <div class="checkboxes">
        <p>Diseño</p>
        <design-checkbox/>
      </div>
      <div class="checkboxes">
        <p>Ubicación</p>
        <location-checkbox/>
      </div>
      <div class="quantity-input">
        <p>Cantidad</p>
        <input
          type="number"
          value="1"
        >
      </div>
      <custom-button title="AGREGA SU PEDIDO" color="#D66A6A"/>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    total: {
      get () {
        return this.$store.getters.total
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .main {
    margin-top: 100px;
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .big-title {
    text-align: center;
    font-size: 2.3rem;
    line-height: 2.7rem;
    font-family: 'Open Sans - Bold', "Roboto", sans-serif;
    font-weight: bold;
    color: #4E4E51;
    padding: 10px;
  }

  .t-shirt-container {
    height: 430px;
    border-radius: 10px;
    background-color: #4E4E51;
    width: 100%;
    display: flex;
    padding: 15px;
    flex-direction: column;

    .img {
      height: 300px;
      object-fit: contain;
    }

    .price {
      text-align: center;
      color: white;
      font-size: 1.5rem;
      margin: 0;
    }

    .price-title {
      margin-bottom: 0;
      margin-top: 15px;
      color: white;
      font-size: .9rem;
      text-align: center;
    }
  }
  .checkboxes {
    margin-bottom: 15px;
    p {
      color: #4E4E51;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0;
    }
  }

</style>
