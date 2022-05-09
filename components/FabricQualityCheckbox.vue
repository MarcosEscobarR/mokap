<template>
  <div class="radio-toolbar">
    <input
      id="radioMedium"
      name="quality"
      type="radio"
      value="Media"
      checked
      @click="handleClick"
    >
    <label for="radioMedium">Media</label>

    <input id="radioHigh" name="quality" type="radio" value="Alta" @click="handleClick">
    <label for="radioHigh">Alta</label>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: String
    }
  },
  computed: {
    quality: {
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
      this.quality = e.target.value
    }
  }
}
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

.radio-toolbar label:hover {
  // border: 6px solid #43BFA2;
  background-color: #E0E0E0;
  color: white;

}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
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
