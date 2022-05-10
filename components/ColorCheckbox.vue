<template>
  <div class="radio-toolbar">
    <input
      id="radioWhite"
      type="radio"
      name="colors"
      value="Blanco"
      :checked="order.color === 'Blanco'"
      @click="handleClick"
    >
    <label for="radioWhite" class="radio-white" />

    <input
      id="radioBlack"
      :checked="order.color === 'Negro'"
      type="radio"
      name="colors"
      value="Negro"
      @click="handleClick"
    >
    <label for="radioBlack" class="radio-black" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { OrderModel } from '~/models/OrderModel'

export default Vue.extend({
  props: {
    value: {
      type: String
    }
  },
  data: () => ({}),
  computed: {
    order (): OrderModel {
      return this.$store.getters.order
    },
    color: {
      get (): string {
        return this.value
      },
      set (val: string) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleClick (e: any) {
      this.color = e.target.value
    }
  }
})
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: 10rem;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar .radio-black {
  cursor: pointer;
  background-color: black;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  width: 4rem;
  height: 4rem;
  transition: 0.1s;
}

.radio-toolbar .radio-white {
  cursor: pointer;
  display: inline-block;
  background-color: white;
  font-size: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  width: 4rem;
  height: 4rem;
  transition: 0.1s;
}

.radio-toolbar label:hover {
  border: 6px solid #e0e0e0;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 140px;
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

@media screen and(max-width: 1024px) and(min-width: 769px) {
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

@media screen and(max-width: 768px) and(min-width: 481px) {
  //Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
