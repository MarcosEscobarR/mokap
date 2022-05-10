<template>
  <div class="radio-toolbar">
    <input
      id="center"
      name="location"
      type="radio"
      value="Centro"
      :disabled="order.TShirtBasic"
      :checked="!order.TShirtBasic"
      @change="handleInput"
    >
    <label :class="order.TShirtBasic ? '.disabled' : null" for="center">Centro</label>

    <input
      :disabled="order.TShirtBasic"
      id="side"
      name="location"
      type="radio"
      value="Pecho"
      :checked="!order.TShirtBasic && order.location === 'Pecho'"
      @change="handleInput"
    >
    <label :class="order.TShirtBasic ? '.disabled' : null" for="side">Bolsillo</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { OrderModel } from '~/models/OrderModel'
export default Vue.extend({
  name: 'LocationCheckbox',
  computed: {
    order (): OrderModel {
      return this.$store.getters.order
    }
  },
  methods: {
    handleInput (e: any) {
      this.$store.commit('setOrder', { location: e.target.value })
    }
  }
})
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: auto;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: white;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #E0E0E0;
  color: #E0E0E0;
  border-radius: 6px;
  width: 150px;
  height: 4rem;
}
.radio-toolbar .disabled {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: white;
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #E0E0E0;
  color: #E0E0E0;
  border-radius: 6px;
  width: 150px;
  height: 4rem;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
  color: #616161;
}
.radio-toolbar .disabled:hover {
  background-color: white;
  color: #acacac;
}

.radio-toolbar input[type="radio"]:focus + label {
}
.radio-toolbar input[type="radio"]:focus + .disabled {
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
}
.radio-toolbar input[type="radio"]:checked + .disabled {
  border: 6px solid #d5d5d5;
  color: #E0E0E0;
}

@media screen and(min-width:1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 330px;
  }
  .radio-toolbar label {
    width: 150px;
    height: 60px;
    font-size: 20px;

  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .radio-toolbar {
    width: 350px;
  }
  .radio-toolbar label {
    width: 150px;
    height: 60px;
    font-size: 20px;

  }}

@media screen and(max-width: 768px) and(min-width: 481px) {
  //Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
