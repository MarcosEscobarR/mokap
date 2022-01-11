<template>
  <button class="btn" :style="{backgroundColor: color}">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#43BFA2'
    }
  }
}
</script>

<style scoped>
.btn {
  elevation: 0;
  border: 0;
  width: 350px;
  height: 70px;
  border-radius: 10px;
  color: white;
  font-size: 25px;
}
</style>
