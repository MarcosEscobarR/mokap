<template>
  <div class="radio-toolbar">
    <input
      v-if="!order.TShirtBasic"
      id="center"
      name="location"
      type="radio"
      value="Centro"
      :checked="!order.TShirtBasic"
      @change="handleInput"
    >
    <label for="center">Centro</label>

    <input
      v-if="!order.TShirtBasic"
      id="side"
      name="location"
      type="radio"
      value="Pecho"
      :checked="!order.TShirtBasic && order.location === 'Pecho'"
      @change="handleInput"
    >
    <label for="side">Bolsillo</label>
  </div>
</template>

<script>
export default {
  name: 'LocationCheckbox',
  computed: {
    order: {
      get () {
        return this.$store.getters.order
      }
    }
  },
  methods: {
    handleInput (e) {
      this.$store.commit('setOrder', { location: e.target.value })
    }
  }
}
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: 450px;
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
  color: #acacac;
  border-radius: 6px;
  width: 220px;
  height: 4rem;
  transition:0.2s;
}

.radio-toolbar label:hover {
  // border: 6px solid #43BFA2;
  color: white;
  background-color: #E0E0E0;
}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
  font-size:1.4rem;
  background-color: white;
}

@media screen and(min-width:1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 420px;
  }
  .radio-toolbar label {
    margin-top: 5px;
    width: 200px;
    height: 60px;
    font-size: 18px;

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
