<template>
  <div class="container">
    <div class="main">
      <div>
        <p class="big-title">
          Customize su Remera
        </p>
        <v-checkbox color="#43BFA2" @change="$store.commit('setOrder', {TShirtBasic: $event})">
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
      <div class="navigator">
        <div class="dots-container">
          <navigator-dots class="mb-8" />
        </div>
        <div class="btn-container">
          <p class="back" @click="$store.commit('createNewOrder')">
            Atras
          </p>
          <custom-button
            title="Continuar >"
            @click=" $store.commit('nextStep', 2)
            "
          />
        </div>
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
  width: 60%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 150px  0 50px 0;
}
.big-title {
  font-weight: bold;
  font-size: 65px;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.sub-title {
  font-weight: bold;
  font-size: 35px;
  color: #4E4E51;
}
.checkbox-label {
  font-size: 25px;
  color: #4E4E51;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
}

.item {
  padding: 20px 0;
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
    cursor: pointer ;
  }
}

.dots-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
