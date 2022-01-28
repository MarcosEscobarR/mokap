<template>
  <v-app>
    <v-main>
      <v-overlay :value="loading" style="z-index: 500">
        <v-progress-circular
          indeterminate
          size="64"
        />
      </v-overlay>
      <Nuxt />
    </v-main>
    <app-footer />
  </v-app>
</template>

<script>
import AppFooter from '../components/AppFooter'
export default {
  components: { AppFooter },
  computed: {
    loading: {
      get () {
        return this.$store.getters.loading
      }
    }
  }
}
</script>
<style scoped lang="scss">

</style>
