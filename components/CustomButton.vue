<template>
  <button class="btn" :style="{backgroundColor: color}" @click="$emit('click', $event)">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    title: {
      type: String,
      required: true
    },
    outlined: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: '#43BFA2'
    },
    value: null
  },
  computed: {
    btnModel: {
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
.btn {
  elevation: 0;
  border: 0;
  width: 350px;
  height: 70px;
  border-radius: 10px;
  color: white;
  font-size: 25px;
}

@media screen and (min-width: 1025px) and (max-width: 1200px) {
  .btn {
    height: 50px;
    font-size: 20px;
    width: 200px;
  }
}

@media screen and (min-width: 1024px) and (max-width: 769px) {
//Disenho mobile
}

@media screen and (min-width: 768px) and (max-width: 481px) {
//Disenho mobile
}

@media screen and (min-width: 480px) and (max-width: 320px) {
//Disenho mobile
}
</style>
