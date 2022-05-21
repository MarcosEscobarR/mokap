<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="800"
    >
      <template v-slot:activator="{ on, attrs }">
        <img class= "inline-img" src="map.png" alt="mapa de entrega" v-bind="attrs" v-on="on">
      </template>

      <v-card>
        <div class="title-container">
            <p>Zona de entrega</p>
        </div>
        <div class="img-container">
             <img class= "img-map" src="map.png" alt="mapa de entrega">
        </div>
 
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped lang="scss">

.img-container {
  padding: 0.2rem;
  width: 100%;
  overflow: hidden;

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

.inline-img{
  width: 100%;
}

.img-map{
    width: 100%;;
}


</style>