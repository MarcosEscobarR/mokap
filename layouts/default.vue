<template>
  <v-app>
    <v-main>
      <Nuxt />
    </v-main>
    <footer class="footer" id="footer">
      <div class="row">
        <div class="col d-flex justify-center">
          <div class="info-container">
            <div class="white-card">
              <img src="feedback.png" alt="feedback">
              <div class="phrase">
                <p>
                  "Me encanto la remera y la presentacion esta increible! No puedo creer que hasta perfume le pongan
                  jaja se pasan"
                </p>
              </div>
              <p class="author">
                - Ramona Lezcano
              </p>

            </div>
          </div>
        </div>
        <div class="col d-flex justify-center">
          <div class="info-container">
            <img src="logo%20mokap.png" class="logo" alt="logo">

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

            <div class="networks">
              <img src="linkedin-logo.png" alt="lkd">
              <img src="facebook-app-logo.png" alt="fb">
              <img src="instagram%20(1).png" alt="ig">
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-container">
        <hr>
        <div class="copyright">
          <div class="img-container">
            <img src="copyright.png" alt="copyright">
          </div>
          <p>Copyright 2022, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {}
</script>
<style scoped lang="scss">
.footer {
  height: 65vh;
  background-color: #4E4E51;
  display: flex;
  flex-direction: column;
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
    font-size: 30px;
    font-weight: 200;
  }
}
.logo {
  width: 700px;
}

.info-container {
 display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
}

.information {
  display: flex;

  p {
    font-size: 35px;
    color: white;
  }
}

.img-container {
  width: 70px;
  img {
    width: 40px;
  }
}

.networks {
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  img {
    width: 100px;
  }
}
</style>
