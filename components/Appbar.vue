<template>
  <header class="appbar-container">
    <img src="logo%20mokap.png" class="logo" alt="logo">
    <div class="info-container">
      <div class="info-text">
        <p>Que Hacemos</p>
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
.appbar-container {
  display: flex;
  justify-content: space-between;
  padding: 10px 60px;
  height: 100px;
}

.logo {
  width: 200px;
}

.info-container {
  display: flex;
  justify-content: space-between;
  align-content: center;

  .info-text {
    font-size: 20px;
    padding: 20px;

    a {
      color: white;
      text-decoration: none;
    }

    p {
      color: white;
    }
  }
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .info-container {
    .info-text {
      font-size: 15px;
    }
  }

  .logo {
    align-self: center;
    width: 100px;
    height: 40px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .info-container {
    .info-text {
      font-size: 13px;
      text-align: center;
      align-self: center;
    }
  }

  .logo {
    align-self: center;
    width: 100px;
    height: 40px;
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
