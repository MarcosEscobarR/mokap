<template>
  <div>
    <mobile-hero-section v-if="step === 1" />
    <customize-mobile v-if="step === 2" />
    <mobile-cart-section id="cart" />
  </div>
</template>

<script>
import CustomizeMobile from '~/components/mobile/CustomizeMobile.vue'

export default {
  components: { CustomizeMobile },
  layout: 'mobile',
  computed: {
    breakpoints () {
      return this.$vuetify.breakpoint.name
    },
    step () {
      return this.$store.getters.step
    }
  }
}
</script>
