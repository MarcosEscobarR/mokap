<template>
  <v-dialog v-model="model" width="800px">
    <v-card class="pa-10 overflow-auto">
      <div class="title-container">
        <p>Impresión DGT</p>
      </div>
      <div class="img-container">
        <img src="dtg-printing.png" alt="dgt-print">
      </div>
      <div class="info-container">
        <p>
          En Mokup no usamos serigrafía o sublimación, usamos impresion DGT sobre remeras 100% algodón. Las impresoras DGT
          funcionan de manera similar a las impresiones de comunes con la diferencia de que en lugar de imprimir sobre papel imprimen
          directo sobre la tela. <br/>
          Esta tecnologia nos permite tener remeras listas en menos de 5 minutos manteniendo una calidad igual o superior que con los
          metodos convencionales. Otra de las ventajas de este metodo de impresión, es que, a diferencia de la serigrafía , no requiere de una
          cantidad minima de impresiones, en la que la convierte en la tecnología especial para diseños únicos y personalizados (o regalos
          de ultimo momento)
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
  }
}
</script>

<style scoped lang="scss">
.info-container {
  margin-top: 20px;

  p {
    color: #8B8888;
    line-height: 1.6rem;
    font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  }
}
.img-container {
  width: 100%;
  img {
    object-fit: contain;
    width: 100%;
  }
}
.title-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
}
</style>
