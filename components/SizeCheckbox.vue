<template>
  <div class="radio-toolbar">
    <input type="radio" id="radioP" name="size" value="apple" checked>
    <label for="radioP">P</label>

    <input type="radio" id="radioM" name="size" value="banana">
    <label for="radioM">M</label>

    <input type="radio" id="radioG" name="size" value="orange">
    <label for="radioG">G</label>

    <input type="radio" id="radioXG" name="size" value="orange">
    <label for="radioXG">XG</label>

    <input type="radio" id="radio2XG" name="size" value="orange">
    <label for="radio2XG">2XG</label>
  </div>
</template>

<script>
export default {
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
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
  font-size: 35px;
  border: 2px solid #8B8888;
  color: #8B8888;
  border-radius: 6px;
  width: 80px;
  height: 80px;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  font-weight: bolder;
  color: #43BFA2;
}
</style>
