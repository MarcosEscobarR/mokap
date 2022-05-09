<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <p class= "guia" v-bind="attrs" v-on="on">
            Guía
        </p>
      </template>

      <v-card>
        <div class="title-container">
            <p>Guía de talles</p>
        </div>
        <div class="img-container">
            <img src="sizechart.JPG" alt="dgt-print">
        </div>
 
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">

.img-container {
  padding: 1rem;
  width: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    // border-radius: 0.5rem;
  }
}
.title-container {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #4e4e51;

  p {
    font-size: 1.4rem;
    font-weight: bold;
    color: white;
    margin-top: 0.7rem;
  }

}

    .guia{
        color:#b3b3b3;
        text-decoration: underline;
        transition: 0.2s;
        font-size: 0.9rem;
        padding-top: 0.9rem;

        p {
            margin-bottom: 0.3rem;
            margin-left: 0.6rem;
        }
    }

    .guia:hover{
        color:#4E4E51;
    }

</style>