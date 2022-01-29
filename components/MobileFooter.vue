<template>
  <footer id="footer" class="footer">
    <div class="logo-container">
      <img src="logo%20mokap.png" class="logo" alt="logo">
    </div>
    <div class="info-container">
      <div>
        <div class="information">
          <div class="img-container">
            <img src="location.png" alt="location">
          </div>
          <p>Bélgica 4624, Asunción, Paraguay</p>
        </div>
        <div class="information">
          <div class="img-container">
            <img src="whatsapp.png" alt="whatsapp">
          </div>
          <p>0986 168880</p>
        </div>
      </div>
    </div>

    <div>
      <div class="networks">
        <div class="network-img">
          <img src="linkedin-logo.png" alt="lkd">
          <img src="facebook-app-logo.png" alt="fb">
          <img src="instagram%20(1).png" alt="ig">
        </div>
      </div>

      <div class="copyright-container">
        <hr>
        <div class="copyright">
          <p>Copyright 2022, All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.footer {
  height: 100vh;
  background-color: #4E4E51;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.white-card {
  width: 600px;
  height: 350px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  transform: rotate(-5deg);
  position: relative;

  .phrase {
    padding-bottom: 20px;

    p {
      font-size: 25px;
      color: #4E4E51;
    }

  }

  .author {
    margin-left: auto;
    font-weight: bold;
    font-size: 25px;
    color: #4E4E51;
  }

  img {
    top: -60px;
    left: -55px;
    position: absolute;
    width: 100px;
    transform: rotate(-35deg);
  }
}

.copyright-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: max-content;
  margin-top: auto;

  hr {
    color: white;
    width: 80%;
    margin: auto;
  }
}

.copyright {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 10px 0;

  p {
    color: white;
    font-size: 20px;
    font-weight: 200;
  }
}

.logo-container {
  width: 100%;
  display: flex;
  justify-content: center;
  .logo {
    width: 400px;
  }
}

.info-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.information {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 25px;
    color: white;
  }
}

.img-container {
  margin: 10px 0;
  img {
    width: 40px;
  }
}

.networks {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .network-img {
    width: 280px;
    display: flex;
    justify-content: space-evenly;
    img {
      width: 60px;
    }
  }
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
