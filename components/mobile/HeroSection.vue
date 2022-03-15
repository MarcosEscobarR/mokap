<template>
  <div class="hero">
    <div class="hero__content">
      <h1>Hecho por humanos, diseñado por artistas</h1>
      <custom-button title="Haz tu pedido" />
    </div>
    <div class="hero__overlay" />
  </div>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #4e4e51;
  background-image: url('/imagen principal.png');
  background-size: cover;
  background-position-x: -270px;
  z-index: 1;
}

.hero__content {
  margin-top: 100px;
  z-index: 3;

  h1 {
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #4e4e51;
  opacity: 0.9;
  z-index: 2;
}
</style>
