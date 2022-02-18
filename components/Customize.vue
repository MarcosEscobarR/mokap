<template>
  <div class="container">
    <div class="main">
      <div>
        <p class="big-title">
          Customize su Remera
        </p>
        <v-checkbox color="#43BFA2" @change="$store.commit('setOrder', {ownTShirt: $event})">
          <template #label>
            <span class="checkbox-label">Tengo mi propia remera</span>
          </template>
        </v-checkbox>
        <div class="item">
          <p class="sub-title">
            Color
          </p>
          <color-checkbox v-model="order.color" />
        </div>
        <div class="item">
          <p class="sub-title">
            Tamaño
          </p>
          <size-checkbox v-model="order.size" />
        </div>
        <div class="item">
          <p class="sub-title">
            Calidad de tela
          </p>
          <fabric-quality-checkbox v-model="order.quality" />
        </div>
      </div>
    </div>

    <div class="btn-container">
      <div class="navigator">
        <div class="dots-container">
          <navigator-dots class="mb-4"/>
        </div>
      </div>
      <div class="btns">
        <p class="back" @click="$store.commit('createNewOrder')">
          Atras
        </p>
        <custom-button
          title="Continuar"
          @click=" $store.commit('nextStep', 2)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { OrderModel } from '~/models/OrderModel'
export default Vue.extend({
  name: 'Customize',
  data: () => ({
    order: {} as OrderModel,
    nextStep: 0
  }),
  watch: {
    order: {
      handler (val) {
        this.$store.commit('setOrder', val)
      },
      deep: true
    }
  }
})
</script>

<style scoped lang="scss">
.container {
  height: 100vh;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  width: 450px;
  height: 550px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 25px;
}
.big-title {
  font-weight: bold;
  font-size: 2.2rem;
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
  padding: 5px 0;
}

.navigator {
  width: 100%;
  display: flex;
}

.btn-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: white;
  bottom: 20px;
  justify-content: center;
  align-items: center;

  .btns {
    width: 450px;
    display: flex;
    justify-content: end;

    .custom-btn-container {
      width: 200px;
    }
    .back {
      font-size: 1.1rem;
      color: #8B8888;
      align-self: end;
      cursor: pointer ;
      padding: 10px 10px 0;
    }
  }
}

.dots-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and(min-width:1025px)and(max-width:1200px){
  .container {
    width: 90%;
  }

  .item {
    padding: 10px 0;
  }

  .btn-container {
    .back {
      font-size: 20px;
    }
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  .container {
    width: 90%;
  }

  .item {
    padding: 10px 0;
  }
  .big-title {
    font-size: 2rem;
  }

  .checkbox-label {
    font-size: 1.2rem;
  }

  .main {
    width: 350px;
  }
  .sub-title {
    font-size: 25px;
  }

  .btn-container {
    bottom: 50px;
    .btns {
      width: 350px;
    }
    .back {
      font-size: 20px;
    }
  }}

@media screen and(max-width:768px)and(min-width:481px){
  //Disenhomobile
}

@media screen and(max-width:480px)and(min-width:320px){
  //Disenhomobile
}
</style>
