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
  width: 100%;
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
  color: #E0E0E0;
  border-radius: 6px;
  width: 140px;
  height: 4rem;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
  color: #616161;

}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
}

</style>
