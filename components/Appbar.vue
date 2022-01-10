<template>
  <header class="appbar-container">
    <img src="logo%20mokap.png" class="logo" alt="logo">
    <div class="info-container">
      <div class="info-text">
        <p>Que Hacemos</p>
      </div>
      <v-spacer />
      <div class="info-text">
        <p>Contacto</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
}
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
      color: white;
      font-size: 20px;
      padding: 20px;
    }
  }
</style>
