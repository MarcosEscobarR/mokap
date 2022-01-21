<template>
  <div class="container">
    <div>
      <div class="title-container">
        <p class="big-title">
          Se ha agregado tu orden al carrito
        </p>
      </div>

      <div class="btn-container">
        <a class="btn-outlined" href="#cart">Ir a Carrito</a>
        <custom-button title="Otra Orden" @click="$store.commit('reset')"/>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton'
export default {
  name: 'OrderCreatedMessage',
  components: { CustomButton }
}
</script>

<style scoped lang="scss">
.btn-outlined {
  elevation: 0;
  border: 3px solid #43BFA2;
  width: 350px;
  height: 70px;
  border-radius: 10px;
  color: #43BFA2;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.title-container {
  .big-title {
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    color: #4E4E51;
  }
}

.btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
}

.container {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
