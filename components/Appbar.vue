<template>
  <header class="appbar-container">
    <img src="logo%20mokap.png" class="logo" alt="logo" @click="$store.commit('resetCart')">
    <div class="info-container">
      <div class="info-text">
        <a href="#">Que Hacemos</a>
      </div>
      <v-spacer/>
      <div class="info-text">
        <a href="#footer">Contacto</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.logo {
  cursor: pointer;
}
.appbar-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 60px 10px 118px;
  height: 4.5rem;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-content: center;

  .info-text {
    font-size: 0.9rem;
    margin: auto;
    padding: 0 0 0 1.4rem;
    font-weight: 600;
    display: flex;

    a {
      color: #e0e0e0;
      text-decoration: none;
    }

    a:hover {
      color: #8B8888;
    }

    p {
      color: #e0e0e0;
    }
  }
}

@media screen and (min-width:1025px) and (max-width: 1200px) {
  .appbar-container {
    padding: 0 10px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .info-container {
    .info-text {
      font-size: .8rem  ;
      text-align: center;
      align-self: center;
    }
  }

  .logo {
    align-self: center;
    width: 120px;
    height: 40px;
  }

  .appbar-container {
    padding: 0 10px;
  }
}

@media screen and (max-width: 768px) and (min-width: 481px) {
  .appbar-container {
    display: none;
    background-color: #4E4E51;
    opacity: 1 !important;
  }
  .info-container {
    display: none;
    .info-text {
      font-size: 13px;
      text-align: center;
      align-self: center;
    }
  }

  .logo {
    align-self: center;
  }}

@media screen and (max-width: 480px) and (min-width: 320px) {
  //Disenho mobile
}
</style>
