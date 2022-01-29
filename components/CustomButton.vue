<template>
  <button class="btn" :style="disabled ? {backgroundColor: '#a6a4a4', cursor: 'default'} : {backgroundColor: color}" @click="handleClick">
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
    disabled: {
      type: Boolean,
      default: false
    },
    value: null
  },
  methods: {
    handleClick($event) {
      if (this.disabled) return{}
      this.$emit('click', $event)
    }
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
@media screen and (min-height: 800px) and (max-height: 1024px) {
  .btn {
    height: 50px;
    font-size: 20px;
    width: 200px;
  }
}

@media screen and (max-width: 1024px) and (min-width: 769px) {
  .btn {
    height: 40px;
    font-size: 15px;
    width: 150px;
  }}

@media screen and (max-width: 768px) and (min-width: 481px) {
//Disenho mobile
}

@media screen and (max-width: 480px) and (min-width: 320px) {
//Disenho mobile
}
</style>
