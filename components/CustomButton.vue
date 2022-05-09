<template>
  <!-- <button class="btn" :style="disabled ? {cursor: 'default'} : {backgroundColor: color}" @click="handleClick"> -->
  <button class="btn" :style="disabled ? {backgroundColor: '#a6a4a4', cursor: 'default'} : {backgroundColor: color}" @click="handleClick">
    {{ title }}
  </button>
</template>

<script>
export default {
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
  computed: {
    btnModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClick ($event) {
      if (this.disabled) { return {} }
      this.$emit('click', $event)
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  border: 0;
  width: 15rem;
  height: 3.2rem;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 0 0;
  transition: 0.2s;
  text-transform: uppercase;
  box-shadow: 0 0 5px rgba(153, 153, 153, 0.1);
}
.btn:hover {
  box-shadow: 0 0 6px rgba(112, 112, 112, 0.5);
  opacity: 0.9;
}
@media screen and (min-width:1025px) and (max-width: 1200px) {
  .btn {
    height: 50px;
    font-size: 1rem;
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
  .btn {
    height: 60px;
    width: 250px;
    font-size: 1.8rem;
    font-weight: normal;
  }
}

@media screen and (max-width: 480px) and (min-width: 320px) {
//Disenho mobile
}
</style>
