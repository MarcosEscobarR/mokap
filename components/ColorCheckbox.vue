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

<style scoped>
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
</style>
