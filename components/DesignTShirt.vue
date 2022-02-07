<template>
  <div class="container">
    <div class="main">
      <div>
        <p class="big-title">
          Customize su Remera
        </p>

        <div class="item">
          <p class="sub-title">
            Diseño
          </p>
          <design-checkbox />
        </div>

        <div class="item">
          <p class="sub-title">
            Ubicación
          </p>
          <location-checkbox />
        </div>

        <div class="item">
          <p class="sub-title">
            Cantidad
          </p>
          <input
            type="number"
            class="quantity"
            value="1"
            @input="$store.commit('setOrder', {quantity: $event.target.value})"
          >
        </div>
      </div>
      <div class="navigator">
        <div class="dots-container">
          <navigator-dots class="mb-8" />
        </div>
        <div class="btn-container">
          <p class="back" @click="$store.commit('nextStep', 1)">
            Atras
          </p>
          <custom-button title="Agregar al carrito" color="#D66A6A" @click="addToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignTShirt',
  methods: {
    addToCart () {
      this.$store.commit('newOrder')
      this.$store.commit('nextStep', 3)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main {
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
}

.big-title {
  font-weight: bold;
  font-size: 2rem;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  font-weight: bold;
  font-size: 1.5rem;
  color: #4E4E51;
}
.checkbox-label {
  font-size: 1.2rem;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.item {
  padding: 10px 0;
}

.navigator {
  height: max-content;
  display: flex;
  flex-direction: column;
}

.btn-container {
  display: flex;
  width: 450px;
  justify-content: space-between;
  margin-left: auto;

  .back {
    font-size: 25px;
    color: #8B8888;
    align-self: end;
    padding: 0 10px;
    cursor: pointer;
  }
}

.dots-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity {
  border: 2px solid #4E4E51;
  width: 100px;
  height: 60px;
  padding: 10px 0 10px 10px;
  border-radius: 6px;
  color: #8B8888;
  font-size: 20px;
  font-weight: bold;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  opacity: 0;
}

@media screen and(min-width:1025px) and(max-width: 1200px) {
  .container {
    width: 90%;
  }
  .main {
    padding: 150px 0;
  }
  .big-title {
    font-size: 45px;
  }

  .sub-title {
    font-size: 25px;
  }

  .item {
    padding: 10px 0;
  }
  .btn-container {
    width: 300px;

    .back {
      font-size: 20px;
    }
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .container {
    width: 90%;
  }
  .main {
    padding: 120px 0;
  }
  .big-title {
    font-size: 35px;
  }

  .sub-title {
    font-size: 25px;
  }

  .item {
    padding: 2px 0;
  }
  .btn-container {
    width: 300px;

    .back {
      font-size: 20px;
    }
  }
  .quantity {
    height: 60px;
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
  //Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
