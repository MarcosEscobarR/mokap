<template>
  <div class="radio-toolbar">
    <input
      id="radioMedium"
      name="quality"
      type="radio"
      value="Media"
      :checked="!disabled && order.quality === 'Media'"
      :disabled="disabled"
      @click="handleClick"
    >
    <label :class=" disabled ? 'disable' : null" for="radioMedium">Media</label>

    <input
      id="radioHigh"
      :disabled="disabled"
      :checked="order.quality === 'Alta'"
      :class="'disable'"
      name="quality"
      type="radio"
      value="Alta"
      @click="handleClick"
    >
    <label :class="disabled ? 'disable' : null" for="radioHigh">Alta</label>
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
  computed: {
    disabled (): boolean {
      return this.$store.getters.order.ownTShirt
    },
    order (): OrderModel {
      return this.$store.getters.order
    },
    quality: {
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
      this.quality = e.target.value
    }
  }
})
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: 450px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: white;
  font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #E0E0E0;
  color: #acacac;
  border-radius: 6px;
  width: 220px;
  height: 4rem;
  transition: 0.2s;
}
.radio-toolbar .disable {
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-color: white;
  font-family: 'Open Sans - Bold', "Roboto", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #8B8888;
  color: #acacac;
  border-radius: 6px;
  width: 220px;
  height: 4rem;
  transition: 0.2s;
}

.radio-toolbar label:hover {
  // border: 6px solid #43BFA2;
  background-color: #E0E0E0;
  color: white;

}
.radio-toolbar .disable:hover {
  background-color: white;
  color: #acacac;
}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}
.radio-toolbar input[type="radio"]:focus + .disable {
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
  font-size: 1.4rem;
  background-color: white;
}
.radio-toolbar input[type="radio"]:checked + .disable {
  border: 6px solid #d5d5d5;
  color: #d5d5d5;
  font-weight: bold;
  font-size: 1.4rem;
  background-color: white;
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 420px;
  }
  .radio-toolbar label {
    font-size: 18px;
    width: 200px;
    height: 60px;
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .radio-toolbar {
    width: auto;
  }
  .radio-toolbar label {
    font-size: 26px;
    width: 150px;
    height: 60px;
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
  .radio-toolbar-label {
    width: 20px;
    height: 4rem;
  }
}

@media screen and(min-width: 320px) and(max-width: 480px) {
  .radio-toolbar-label {
    width: 120px;
    height: 4rem;
  }
}
</style>
