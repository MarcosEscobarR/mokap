<template>
  <div>
    <img ref="container" src="imagen%20principal.png" class="big-img" alt="home-img">
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'HomeImage',
  computed: {
    createNewOrder: {
      get () {
        return this.$store.getters.createNewOrder
      }
    }
  },
  watch: {
    createNewOrder (val) {
      const timeline = gsap.timeline()

      if (val) { timeline.to(this.$refs.container, 0.3, { opacity: 0}) }
      setTimeout(() => {
        timeline.to(this.$refs.container, 0, { opacity:1, x: 0 })
      }, 1000)
    }
  }

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
