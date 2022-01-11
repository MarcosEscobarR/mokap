<template>
  <div class="radio-toolbar">
    <input type="radio" id="radioWhite" name="colors" value="apple" checked>
    <label for="radioWhite" class="radio-white"/>

    <input type="radio" id="radioBlack" name="colors" value="banana">
    <label for="radioBlack" class="radio-black"/>
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
    clicked: false
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
    handleClick () {
      this.clicked = !this.clicked
      this.color = this.$refs.radio.getAttribute('data-value')
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
