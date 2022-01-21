<template>
  <div class="my-4">
    <label>{{ label }}</label>
    <v-text-field color="#43BFA2" outlined dense v-model="model"/>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: String
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped lang="scss">
label {
  display: block;
  font-size: 25px;
  font-weight: 300;
  color: #8B8888;
}

</style>
