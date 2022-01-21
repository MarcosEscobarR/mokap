<template>
  <div class="radio-toolbar">
    <input
      id="firstDot"
      type="radio"
      name="dots"
      value="first"
      :checked="step === 1"
      @click="handleClick"
    >
    <label for="firstDot" />

    <input
      id="secondDot"
      type="radio"
      name="dots"
      value="second"
      :checked="step === 2"
      @click="handleClick"
    >
    <label for="secondDot" />
  </div>
</template>

<script>
export default {
  name: 'NavigatorDots',
  computed: {
    step: {
      get () {
        return this.$store.getters.step
      }
    }
  },
  methods: {
    handleClick (e) {
      if (e.target.value === 'first') {
        this.$store.commit('nextStep', 1)
      } else {
        this.$store.commit('nextStep', 2)
      }
    }
  }
}
</script>

<style scoped>
.radio-toolbar {
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 50px;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar label {
  cursor: pointer;
  background-color: white;
  border: 1px solid #8B8888;
  border-radius: 100%;
  width: 20px;
  height: 20px;
}

.radio-toolbar input[type="radio"]:checked + label {
  background-color: #8B8888;
}
</style>
