<template>
  <div class="radio-toolbar">
    <input id="basic" name="design" type="radio" value="media" checked>
    <label for="basic">Remera básica</label>

    <input id="current-design" name="design" type="radio" value="alta">
    <label for="current-design">Diseños disponibles</label>

    <input id="own-design" name="design" type="radio" value="alta">
    <label for="own-design">Cargar tu Diseño</label>
  </div>
</template>

<script>
export default {
  name: 'DesignCheckbox'
}
</script>

<style scoped>
.radio-toolbar {
  display: flex;
  justify-content: space-between;
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
  font-size: 25px;
  border: 2px solid #8B8888;
  color: #8B8888;
  border-radius: 6px;
  width: 200px;
  height: 80px;
  text-align: center;
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
</style>
