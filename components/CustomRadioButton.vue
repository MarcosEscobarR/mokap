<template>
    <v-radio class="radio"></v-radio>
</template>

<script>
export default {
  name: 'CustomRadioButton',
  props
}
</script>

<style scoped>
.radio{
  display:inline-block;
  width:15px;
  height: 15px;
  border-radius: 100%;
  background-color:lightblue;
  border: 2px solid lightblue;
  cursor:pointer;
  margin: 2px 0;
}

.radio.selected{
  border-color: blue;
}
</style>
