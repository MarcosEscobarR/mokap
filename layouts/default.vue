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
    <div class="app-footer">
      <app-footer/>
    </div>
    <div class="mobile-footer">
      <mobile-footer/>
    </div>
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
  .app-footer{}
  .mobile-footer {
    display: none;
  }
  .app-footer {
    display: block;
  }
  @media screen and(min-width:1025px)and(max-width:1200px){
  }

  @media screen and(max-width:1024px)and(min-width:769px){
    //Disenhomobile
  }

  @media screen and(max-width:768px)and(min-width:481px){
    .mobile-footer {
      display: block;
    }
    .app-footer {
      display: none;
    }
  }

  @media screen and(max-width:480px)and(min-width:320px){
    //Disenhomobile
  }
</style>
