<template>
  <div class="radio-toolbar">
    <input
      id="center"
      name="location"
      type="radio"
      value="Centro"
      checked
      @change="handleInput"
    >
    <label for="center">Centro</label>

    <input
      id="side"
      name="location"
      type="radio"
      value="Pecho"
      @change="handleInput"
    >
    <label for="side">Pecho</label>
  </div>
</template>

<script>
export default {
  name: 'LocationCheckbox',
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
  font-family: 'Open Sans',"Roboto", sans-serif;
  font-size: 1.5rem;
  border: 2px solid #8B8888;
  color: #8B8888;
  border-radius: 6px;
  width: 220px;
  height: 4rem;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
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
