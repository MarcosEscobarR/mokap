<template>
  <footer>
    <img class="footer__logo" src="logo mokap.png" alt="mokap" />

    <div class="footer__sections">
      <div class="footer__section">
        <img src="location.png" alt="Ubicación" />
        <address>Bélgica 4625, Asunción, Paraguay</address>
      </div>
      <a href="https://wa.me/+595986186880"  class="footer__section">
        <img src="whatsapp.png" alt="Ubicación" />
        <span>0986 186 880</span>
      </a>
    </div>

    <div class="footer__bottom">
      <div class="footer__bottom__socials">
        <img src="linkedin-logo.png" alt="LinkedIn" />
        <img src="facebook-app-logo.png" alt="Facebook" />
        <img src="instagram (1).png" alt="Instagram" />
      </div>
      <hr />
      <span>&copy; Copyright 2022, All Rights Reserved </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #4e4e51;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  height: max-content;
  font-size: 1.25rem;

  .footer__logo {
    width: 80%;
    max-width: 400px;
  }

  .footer__sections {
    margin: 2rem 0;

    .footer__section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;

      &:first-of-type {
        margin-bottom: 2rem;
      }

      &:last-of-type {
        margin-top: 2rem;
      }

      address {
        font-style: normal;
      }

      img {
        max-width: 64px;
        margin-bottom: 1rem;
      }
    }
  }

  .footer__bottom {
    width: 90%;
    text-align: center;

    .footer__bottom__socials {
      display: flex;
      justify-content: center;

      img:first-child {
        margin-right: 1rem;
      }

      img:last-child {
        margin-left: 1rem;
      }

      img {
        width: 64px;
      }
    }

    hr {
      margin: 1.5rem 0;
      border: 1px solid #f2f2f2;
    }
  }
}
</style>
