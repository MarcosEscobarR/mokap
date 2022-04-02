<template>
  <div class="form">
    <label>{{ label }}</label>
    <v-text-field
      v-model="model"
      :disabled="disabled"
      color="#43BFA2"
      outlined
      dense
      :rules="rules"
      :messages="null"
    />
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
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
    // disabled: {
    //   get () {
    //     console.log(this.$store.getters.disable)
    //     return this.$store.getters.disable
    //   }
    // },
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

<style lang="scss" scoped>
.v-text-field__details {
  display: none;
}

label {
  display: block;
  font-size: 1rem;
  font-weight: 300;
  color: #8B8888;
}

.form {
  margin: 0 5px ;
  width: 100%;
}

@media screen and(min-width:1025px)and(max-width:1200px){

  .form {
    margin: 0 5px ;
  }
}
@media screen and(min-height: 800px) and (max-height: 1024px){
  label {
    font-size: 16px;
  }

  .form {
    margin: 0 5px ;
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  label {
    font-size: .9rem;
  }

  .form {
    margin: 0 5px ;
  }}

@media screen and(max-width:768px)and(min-width:481px){
  //Disenhomobile
}

@media screen and(max-width:480px)and(min-width:320px){
  //Disenhomobile
}

</style>
