<template>
  <div class="form">
    <label>{{ label }}</label>
    <v-text-field v-model="model" color="#43BFA2" outlined dense :rules="rules" />
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
    },
    rules: []
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

.form {
  margin: 20px 0;
}

@media screen and(min-width:1025px)and(max-width:1200px){
  label {
    font-size: 16px;
  }

  .form {
    margin: 0;
  }
}

@media screen and(min-width:1024px)and(max-width:769px){
  //Disenhomobile
}

@media screen and(min-width:768px)and(max-width:481px){
  //Disenhomobile
}

@media screen and(min-width:480px)and(max-width:320px){
  //Disenhomobile
}

</style>
