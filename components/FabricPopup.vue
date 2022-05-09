<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <p class= "details" v-bind="attrs" v-on="on">
            Detalle
        </p>
      </template>

      <v-card>
      <div class="title-container">
        <p>Calidad de la tela</p>
  
      </div>

      <div class="info-container">
        <span>Alta (100% algodón):</span>
        <p>
          Mantiene una excelente calidad hasta 40 - 50 
          lavadas. Misma calidad que tus remeras Timberland 
          o Caterpillar.
        </p>
        <span>Media (100% algodón):</span>
        <p>
          Mantiene la calidad hasta 15 - 20 lavadas. 
          Similar a tus remeras de Springfield o Aeropostale.
        </p>
        <div class= "obs">
          <p>Obs.: no es necesario especificar la calidad si traes tu propia remera.</p>
        </div>
        
      </div>
 
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">
  .info-container {
    margin-top: 20px;
    padding: 1rem;

    p {
      color: #666666;
      line-height: 1.6rem;
      font-family: 'Open Sans - Bold', "Roboto", sans-serif;
      margin-bottom: 2rem;
    }

    span{
      font-weight: 800;
      color: #4e4e51;
      font-size: 1.1rem;
    }
  }

  .obs{
    font-size: 0.9rem;
    color:#666666 ;
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

  .details{
    color:#b3b3b3;
    text-decoration: underline;
    transition: 0.2s;
    font-size: 0.9rem;
    padding-top: 0.9rem;
    margin-bottom: 0.3rem;
    margin-left: 0.6rem;
  }

  .details:hover{
    color:#4E4E51;
  }

</style>