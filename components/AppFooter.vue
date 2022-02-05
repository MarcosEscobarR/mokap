<template>
  <footer id="footer" class="footer">
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
            <a href="https://www.linkedin.com/company/mokapy/about/" target="_blank"><img src="linkedin-logo.png" alt="lkd"></a>
            <a href="https://m.facebook.com/mokap.py" target="_blank"><img src="facebook-app-logo.png" alt="fb"></a>
            <a href="https://www.instagram.com/mokap.py/" target="_blank"><img src="instagram%20(1).png" alt="ig"></a>
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

  a {
    img {
      width: 100px;
    }
  }
}

@media screen and(min-width: 1700px) and(max-width: 1200px) {
  .white-card {
    width: 320px;
    height: 250px;

    .phrase {
      p {
        font-size: 16.6px;
      }
    }

    .author {
      font-size: 16.6px;
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
    img {
      width: 80px;
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
  .white-card {
    width: 220px;
    height: 200px;

    img {
      width: 80px;
      left: -40px;
      top: -50px;
    }

    .phrase {
      p {
        font-size: 12px;
      }
    }

    .author {
      font-size: 12px;
    }
  }

  .information {
    p {
      font-size: 18px;
    }
  }

  .img-container {
    width: 35px;

    img {
      width: 20px;
    }
  }

  .networks {
    img {
      width: 60px;
    }
  }
  .logo {
    width: 350px;
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
