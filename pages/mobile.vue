<template>
  <div>
    <mobile-hero-section v-if="step === 0" />
    <customize-mobile v-if="step === 1" />
    <mobile-cart-section  />
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
  },
  watch: {
    breakpoints (val) {
      if (val !== 'xs' || val !== 'sm') {
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>
