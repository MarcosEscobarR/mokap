<template>
  <div class="form">
    <label>{{label}}</label>
    <v-select
      :rules="rules"
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
    rules: [],
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

.form {
  margin: 20px 0;
}

@media screen and(min-width:1700px)and(max-width:1200px){
  label {
    font-size: 16px;
  }

  .form {
    margin: 0;
  }
}
@media screen and(min-height: 800px) and (max-height: 1999px){
  label {
    font-size: 16px;
  }

  .form {
    margin: 0;
  }
}

@media screen and(max-width:1024px)and(min-width:769px){
  label {
    font-size: 13px;
  }

  .form {
    margin: 0;
  }}

@media screen and(max-width:768px)and(min-width:481px){
//Disenhomobile
}

@media screen and(max-width:480px)and(min-width:320px){
//Disenhomobile
}
</style>
