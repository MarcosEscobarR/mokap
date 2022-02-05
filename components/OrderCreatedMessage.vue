<template>
  <div class="container">
    <div>
      <p class="big-title">
        Se ha agregado tu orden al carrito
      </p>

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
  width: 15rem;
  height: 3.2rem;
  border-radius: 10px;
  color: #43BFA2;
  font-size: 1.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

  .big-title {
    font-size: 70px;
    font-weight: bold;
    text-align: center;
    color: #4E4E51;
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

@media screen and(min-width:1700px)and(max-width:1200px){
  .container {
    padding: 0 30px ;
  }
  .big-title {
    font-size: 40px;
  }
  .btn-outlined {
    height: 50px;
    font-size: 20px;
    width: 200px;
  }
}
@media screen and(min-height: 800px) and (max-height: 1999px){
  .container {
    padding: 0 30px ;
  }
  .big-title {
    font-size: 40px;
  }
  .btn-outlined {
    height: 50px;
    font-size: 20px;
    width: 200px;
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  .container {
    padding: 0 30px ;
  }
  .big-title {
    font-size: 40px;
  }
  .btn-outlined {
    height: 40px;
    font-size: 20px;
    width: 150px;
  }}

@media screen and(max-width:768px)and(min-width:481px){
  //Disenhomobile
}

@media screen and(max-width:480px)and(min-width:320px){
  //Disenhomobile
}
</style>
