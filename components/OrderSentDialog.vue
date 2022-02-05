<template>
  <v-dialog v-model="dialogModel" persistent width="750px">
    <v-card>
      <div class="close-icon">
        <v-icon large @click="closeDialog">
          mdi-close
        </v-icon>
      </div>
      <div class="container">
        <div class="big-text">
          <p>Pedido Recibido</p>
        </div>
        <div class="main-text">
          <p>
            Un compañero de atención al cliente se comunicará contigo con los detalles de tu pedido. Una vez que
            apruebes
            la order por Whatsapp, pondremos manos a la obra para entregártelo lo antes posible
          </p>
        </div>
        <div class="thank-container">
          <img src="party-popper.png" alt="party-pooper">
          <p>MUCHAS GRACIAS!</p>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'OrderSentDialog',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    dialogModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    closeDialog () {
      this.dialogModel = false
      this.$emit('change', true)
    }
  }
}
</script>

<style scoped lang="scss">
.close-icon {
  position: absolute;
  right: 6px;
  top: 6px;
  cursor: pointer;
}
.container {
  padding: 30px;
}
.big-text {
  p {
    text-align: center;
    color: #8B8888;
    font-size: 40px;

  }
}
  .main-text {
    p {
      font-size: 28px;
      text-align: center;
      font-weight: 350;
      line-height: 40px;
      color: #8B8888;
    }
  }

.thank-container {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
  p {
    text-align: center;
    color: #8B8888;
    font-size: 40px;
  }
}

</style>
