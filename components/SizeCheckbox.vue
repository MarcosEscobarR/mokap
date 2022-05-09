<template>
  <div class="radio-toolbar">
    <input
      id="radioP"
      type="radio"
      name="size"
      value="P"
      checked
      @click="handleClick"
    >
    <label for="radioP">P</label>

    <input id="radioM" type="radio" name="size" value="M" @click="handleClick">
    <label for="radioM">M</label>

    <input id="radioG" type="radio" name="size" value="G" @click="handleClick">
    <label for="radioG">G</label>

    <input id="radioXG" type="radio" name="size" value="XG" @click="handleClick">
    <label for="radioXG">XG</label>

    <input id="radio2XG" type="radio" name="size" value="2XG" @click="handleClick">
    <label for="radio2XG">2XG</label>
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
    size: {
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
      this.size = e.target.value
    }
  }
}
</script>

<style scoped lang="scss">
.radio-toolbar {
  display: flex;
  justify-content: space-between;
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
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #E0E0E0;
  color: #acacac;
  border-radius: 6px;
  width: 4rem;
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
  font-weight: bolder;
  color: #43BFA2;
  font-size: 1.4rem;
  background-color: white;
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 420px;
  }
  .radio-toolbar label {
    font-size: 18px;
    width: 60px;
    height: 60px;
  }
}

</style>
