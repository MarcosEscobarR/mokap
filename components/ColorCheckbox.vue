<template>
  <div class="radio-toolbar">
    <input
      id="radioWhite"
      type="radio"
      name="colors"
      value="Blanco"
      checked
      @click="handleClick"
    >
    <label for="radioWhite" class="radio-white" />

    <input id="radioBlack" type="radio" name="colors" value="Negro" @click="handleClick">
    <label for="radioBlack" class="radio-black" />
  </div>
</template>

<script>

import { Colors } from '@/helpers/constants'

export default {
  props: {
    value: {
      type: Colors
    }
  },
  data: () => ({
  }),
  computed: {
    color: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClick (e) {
      this.color = e.target.value
    }
  }
}
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: 200px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar .radio-black {
  cursor: pointer;
  background-color: black;
  border: 2px solid black;
  border-radius: 6px;
  width: 80px;
  height: 80px;
}

.radio-toolbar .radio-white {
  cursor: pointer;
  display: inline-block;
  background-color: white;
  font-size: 16px;
  border: 2px solid grey;
  border-radius: 8px;
  width: 80px;
  height: 80px;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
}

@media screen and(min-width:1700px)and(max-width:1200px){
  .radio-toolbar {
    width: 150px;
  }
  .radio-toolbar .radio-black {
    height: 60px;
    width: 60px;
  }
  .radio-toolbar .radio-white {
    height: 60px;
    width: 60px;
  }
}
@media screen and(min-height: 800px) and (min-width: 1999px){
  .radio-toolbar {
    width: 150px;
  }
  .radio-toolbar .radio-black {
    height: 70px;
    width: 70px;
  }
  .radio-toolbar .radio-white {
    height: 70px;
    width: 70px;
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  .radio-toolbar {
    width: 150px;
  }
  .radio-toolbar .radio-black {
    height: 60px;
    width: 60px;
  }
  .radio-toolbar .radio-white {
    height: 60px;
    width: 60px;
  }}

@media screen and(max-width:768px)and(min-width:481px){
//Disenhomobile
}

@media screen and(max-width:480px)and(min-width:320px){
//Disenhomobile
}
</style>
