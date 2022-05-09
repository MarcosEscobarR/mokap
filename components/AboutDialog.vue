<template>
  <v-dialog v-model="model" width="800px">
    <v-card class="pa-10 overflow-auto">
      <div class="title-container">
        <p>Impresión DTG</p>
        <!-- <a class= 'close'>
          <img src="close.png" alt="close">
        </a> -->
      </div>
      <div class="img-container">
        <img src="dtg-printing.png" alt="dgt-print">
      </div>
      <div class="info-container">
        <p>
          En Mokap no usamos serigrafía o sublimación, usamos impresion DTG en remeras 100% algodón. Las impresoras DTG
          funcionan de manera similar a las impresoras comunes con la diferencia de que en lugar de imprimir sobre papel imprimen
          directo sobre la tela. <br/><br/>
          Esta tecnologia nos permite tener remeras listas en menos de 5 minutos manteniendo una calidad igual o superior que con los
          metodos convencionales. Otra de las ventajas de este método de impresión, es que, a diferencia de la serigrafía , no requiere de una
          cantidad minima de impresiones, lo que la convierte en la tecnología especial para diseños únicos y personalizados (o regalos
          de último momento)
        </p>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AboutDialog',
  props: {
    value: null
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },

}

</script>

<style scoped lang="scss">
.info-container {
  margin-top: 20px;

  p {
    color: #666666;
    line-height: 1.6rem;
    font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  }
}
.img-container {
  width: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    max-height: 18rem;
    border-radius: 0.5rem;
  }
}
.title-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  position: relative;

  p {
    font-size: 1.4rem;
    font-weight: bold;
  }

  img{
    width: 13px;
    position: absolute;
    top: -10px;
    right: -10px;
    opacity: 0.3;
    transition: 0.2s;
  }

  img:hover{
    opacity:1;
  }



}
</style>
