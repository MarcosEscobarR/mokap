<template>
  <footer id="footer" class="footer">
    <div class="row">
      <div class=" d-flex justify-center">
        <div class="info-container">
          <div class="white-card">
            <img src="feedback.png" alt="feedback">
            <div class="phrase">
              <p>
                "Me encantó la remera y la presentación esta increíble! No puedo creer que hasta perfume le pongan
                jaja se pasan"
              </p>
            </div>
            <p class="author">
              - Ramona Lezcano
            </p>
          </div>
        </div>
      </div>
      <div class=" d-flex justify-center">
        <div class="info-container">
          <div class="logo-container">
            <img src="logo%20mokap.png" class="logo" alt="logo">
          </div>

          <div class="information-container">
            <div>
              <div class="information">
                <div class="img-container">
                  <img src="location.png" alt="location">
                </div>
                <a href="https://goo.gl/maps/buDPk4dhMEbmzrKt6" target="_blank">Bélgica 4624, Asunción, Paraguay</a>
              </div>
              <div class="information">
                <div class="img-container">
                  <img src="whatsapp.png" alt="whatsapp">
                </div>
                <a href="https://wa.me/+595986186880" target="_blank">0986 168880</a>
              </div>
            </div>
          </div>

          <div class="networks">
            <div class="network-img-container">
              <a href="https://www.linkedin.com/company/mokapy/about/" target="_blank">
                <img
                  src="linkedin-logo.png"
                  alt="lkd"
                ></a>
              <a href="https://m.facebook.com/mokap.py" target="_blank"><img src="facebook-app-logo.png" alt="fb"></a>
              <a href="https://www.instagram.com/mokap.py/" target="_blank"><img src="instagram%20(1).png" alt="ig"></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="copyright-container">
      <hr>
      <div class="copyright">
        <img src="copyright.png" alt="copyright">
        <p>Copyright 2022, All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.information-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.footer {
  height: 50vh;
  min-height: 500px;
  background-color: #4E4E51;
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  justify-content: space-evenly;
  height: 100%;
}

.white-card {
  width: 450px;
  height: 250px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;
  transform: rotate(-5deg);
  position: relative;
  transition:0.3s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0);

  .phrase {
    padding-bottom: 0rem;

    p {
      font-size: 1.1rem;
      color: #4E4E51;
      text-align: center;
      font-weight: 500;
    }

  }

  .author {
    margin-left: 12rem;
    font-weight: 800;
    font-size: 1rem;
    color: #4E4E51;
  }

  img {
    top: -50px;
    left: -45px;
    position: absolute;
    width: 80px;
    transform: rotate(-35deg);
    transition: 0.2s;
  }
}

.white-card:hover{

  transform: rotate(0deg) scale(1.05);
  box-shadow: 0 0 10px rgba(158, 158, 158, 0.9);

  img {
    transform: scale(0.95) rotate(-30deg);
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
    color: rgb(184, 184, 184);
    width: 80%;
    margin: auto;
  }
}

.copyright {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px 0;

  img {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    margin-bottom: 17px;
    opacity: 0.6;
  }

  p {
    color: rgb(199, 199, 199);
    font-size: 1rem;
    font-weight: 300;
  }
}

.info-container {
  display: flex;
  height: 100%;
  max-height: 36rem;
  flex-direction: column;
  justify-content: space-evenly;

  .logo-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .logo {
      width: 450px;
    }
  }
}

.information {
  display: flex;
  transition: 0.2s;

  a {
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 3rem;
    color: white;
    font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  }
}

.information:hover {
  opacity: 0.6;
}

.img-container {
  width: fit-content;
  margin-right: 0.5rem;
  margin-top: 7px;

  img {
    width: 2rem;
  }
}

.networks {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  width: 100%;

  .network-img-container {
    display: flex;
    justify-content: space-around;
    padding: 0 5rem;
    width: 500px;

    img {
      width: 60px;
      opacity: 0.2;
      transition: 0.4s;
    }

    img:hover{
      opacity: 1;
    }
  }
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .white-card {
    width: 320px;
    height: 250px;

    .phrase {
      p {
        font-size: 1rem;
      }
    }

    .author {
      font-size: 1rem;
      margin-left: 0;
      text-align: center;
    }
  }

  .information {
    p {
      font-size: 20px;
    }
  }

  .img-container {
    width: 38.5px;

    img {
      width: 22px;
    }
  }

  .networks {
    padding: 0;

    .network-img-container {
      img {
        width: 80px;
      }
    }
  }
  .logo {
    width: 400px;
  }

  .copyright {
    p {
      font-size: 22px;
    }
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .footer {
    height: 400px;
  }
  .white-card {
    width: 220px;
    height: 200px;
    margin-left: 40px;

    img {
      display: none;
    }

    .phrase {
      p {
        font-size: 12px;
      }
    }

    .author {
      margin-left: 0;
      font-size: 12px;
    }
  }

  .information-container {
    .information {
      a {
        font-size: 1.2rem;
      }
    }

    .img-container {
      width: 35px;

      img {
        width: 20px;
      }
    }
  }

  .networks {
    .network-img-container {
      img {
        width: 60px;
      }
    }
  }
  .info-container {
    .logo-container {
      .logo {
        width: 350px;
      }
    }
  }

  .copyright {
    p {
      font-size: 18px;
    }
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
