<template>
  <div class="radio-toolbar">
    <input id="basic" name="design" type="radio" value="media" checked>
    <label style="padding: 10px" for="basic" @click="basicTShirt">Remera básica</label>

    <input id="current-design" name="design" type="radio" value="alta" :checked="order.design === 'custom'">
    <label for="current-design" @click="handleCustomDesignClick">Diseños disponibles</label>

    <input
      id="own-design"
      ref="file"
      name="design"
      type="file"
      value="alta"
      accept="image/*"
      @change="handleFile"
    >
    <input id="own-design" name="design" type="radio" value="alta" :checked="order.design === 'propio'">
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
  computed: {
    order: {
      get () {
        return this.$store.getters.order
      }
    }
  },
  methods: {
    basicTShirt () {
      if (!this.order.ownTShirt) {
        this.$store.commit('setOrder', { TShirtBasic: true, image: null, quality: null })
      }
    },
    handleCustomDesignClick () {
      this.openDialog = !this.openDialog
      this.$store.commit('setOrder', { design: 'custom' })
    },
    handleFile () {
      this.$store.commit('setLoading')
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
        this.$store.commit('setOrder', { image: url, TShirtBasic: false })
        this.$store.commit('setOrder', { design: 'propio' })
        this.$store.commit('setLoading')
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
  font-family: 'Open Sans - Bold',"Roboto", sans-serif;
  font-size: 1.3rem;
  line-height: 1.4rem;
  border: 2px solid #E0E0E0;
  color: #E0E0E0;
  border-radius: 6px;
  width: 9rem;
  height: 4rem;
  text-align: center;
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

@media screen and(min-width:1025px) and(max-width: 1200px) {
  .radio-toolbar {
    width: 400px;
    flex-wrap: wrap;
    justify-content: left;
  }
  .radio-toolbar label {
    margin: 10px 30px 10px 0;
    width: 150px;
    height: 60px;
    font-size: 20px;

  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .radio-toolbar {
    width: 350px;
    flex-wrap: wrap;
    justify-content: left;
  }
  .radio-toolbar label {
    margin: 10px;
    width: 150px;
    height: 60px;
    font-size: 20px;

  }}

@media screen and(max-width: 768px) and(min-width: 481px) {
//Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
//Disenhomobile
}
</style>
