<template>
  <v-app>
    <app-bar-mobile />
    <v-overlay :value="loading" style="z-index: 500">
      <v-progress-circular
        indeterminate
        size="64"
      />
    </v-overlay>
    <router-view />
    <mobile-app-footer />
  </v-app>
</template>
<script>
export default {
  computed: {
    loading: {
      get () {
        return this.$store.getters.loading
      }
    }
  }
}
</script>
