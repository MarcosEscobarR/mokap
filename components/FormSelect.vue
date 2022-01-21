<template>
  <div>
    <label>{{label}}</label>
    <v-select
      :items="items"
      color="#43BFA2"
      dense
      outlined
    />
  </div>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    label: {
      type: String,
      required: true
    },
    items: null,
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

<style scoped>
label {
  display: block;
  font-size: 25px;
  font-weight: 300;
  color: #8B8888;
}
</style>
