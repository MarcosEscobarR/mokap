<template>
  <div class="radio-toolbar">
    <input id="basic" name="design" type="radio" value="media" checked>
    <label for="basic">Remera básica</label>

    <input id="current-design" name="design" type="radio" value="alta">
    <label for="current-design" @click="openDialog = !openDialog">Diseños disponibles</label>

    <input
      id="own-design"
      ref="file"
      name="design"
      type="file"
      value="alta"
      accept="image/*"
      @change="handleFile"
    >
    <label for="own-design">Cargar tu Diseño</label>

    <current-designs-dialog v-model="openDialog" />
  </div>
</template>

<script>
export default {
  name: 'DesignCheckbox',
  data: () => ({
    openDialog: false,
    imageUrl: ''
  }),
  methods: {
    handleFile () {
      const file = this.$refs.file.files[0]
      if (!file.type.match('image.*')) {
        alert('no es una imagen')
      }

      const metadata = {
        contentType: file.type
      }
      const storage = this.$fire.storage
      const imageRef = storage.ref(`images/${file.name}`)
      const uploadTask = imageRef.put(file, metadata)
        .then(snapshot => (snapshot.ref.getDownloadURL().then(url => (url))))
        .catch(e => console.log(e))

      uploadTask.then((url) => {
        this.$store.commit('setOrder', { image: url })
      })
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

.radio-toolbar input[type="file"] {
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
  font-family: 'Open Sans', "Roboto", sans-serif;
  font-size: 25px;
  border: 2px solid #8B8888;
  color: #8B8888;
  border-radius: 6px;
  width: 200px;
  height: 80px;
  text-align: center;
}

.radio-toolbar label:hover {
  border: 6px solid #43BFA2;
}

.radio-toolbar input[type="radio"]:focus + label {
  border: 6px dashed #444;
}

.radio-toolbar input[type="radio"]:checked + label {
  border: 6px solid #43BFA2;
  color: #43BFA2;
  font-weight: bold;
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 400px;
    flex-wrap: wrap;
    justify-content: center;
  }
  .radio-toolbar label {
    margin: 10px;
    width: 150px;
    height: 60px;
    font-size: 20px;

  }
}

@media screen and(min-width: 1024px) and(max-width: 769px) {
//Disenhomobile
}

@media screen and(min-width: 768px) and(max-width: 481px) {
//Disenhomobile
}

@media screen and(min-width: 480px) and(max-width: 320px) {
//Disenhomobile
}
</style>
