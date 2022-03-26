<template>
  <div>
    <!--    <mobile-hero-section />-->
    <customize-mobile />
    <mobile-cart-section />
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
    }
  },
  watch: {
    breakpoints (val) {
      if (val !== 'xs') {
        this.$router.push({ path: '/' })
      }
    }
  }
}
</script>
