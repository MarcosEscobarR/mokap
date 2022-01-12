<template>
  <div>
    <img src="imagen%20principal.png" class="big-img" alt="home-img">
  </div>
</template>

<script>
export default {
  name: 'HomeImage'
}
</script>

<style scoped>
 .big-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  object-fit: cover;
  position: absolute;
  z-index: 50;
}
</style>
