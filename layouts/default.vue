<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <app-footer/>
  </v-app>
</template>

<script>
import AppFooter from '../components/AppFooter'
export default {
  components: { AppFooter }
}
</script>
<style scoped lang="scss">

</style>
