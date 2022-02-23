<template>
  <v-dialog v-model="dialogModel" max-width="1200px">
    <v-card class="pa-10">
      <div class="grid">
        <div
          v-for="(item, index) in itemNames"
          :key="index"
          class="radio-toolbar"
        >
          <input :id="index" name="design" type="radio" :value="item">
          <label class="img-container" :for="index">
            <img
              :id="index + '-img'"
              :src="item"
              alt="design"
              @click="indexSelected = index"
            >
            <p>{{ getFileName(item) }}</p>
          </label>
        </div>
      </div>
      <div class="btn-container">
        <custom-button
          title="Seleccionar"
          :color="indexSelected === -1 ? '#8B8888' : '#43BFA2'"
          @click="selectImage"
        />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import DesignPaths from '~/helpers/DesignPaths'

export default {
  name: 'CurrentDesignsDialog',
  props: {
    value: {
      type: Boolean
    }
  },
  data: () => ({
    itemNames: DesignPaths,
    indexSelected: -1
  }),
  computed: {
    dialogModel: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    async selectImage () {
      this.$store.commit('setLoading')
      const img = document.getElementById(this.indexSelected + '-img')
      const blob = await this.$axios.$get(img.src, { responseType: 'blob' })
      const file = new File([blob], Date.now().toString(), {
        type: blob.type,
        lastModified: Date.now()
      })
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
        this.$store.commit('setOrder', {
          image: url,
          TShirtBasic: false,
          design: 'custom'
        })
        this.$store.commit('setLoading')
        this.dialogModel = false
      })
    },

    getFileName (val) {
      const stringSplitter = val.split('/')
      const fileName = stringSplitter.pop().slice(0, -4)

      try {
        return fileName.replaceAll('_', ' ')
      } catch (e) {
        console.log(e)
        return fileName
      }
    }
  }
}
</script>

<style scoped lang="scss">

.radio-toolbar {
  display: flex;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  margin: 5px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  height: 480px;
  overflow: auto;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

.radio-toolbar .img-container {
  width: 200px;
  height: 250px;
  cursor: pointer;

  img {
    object-fit: contain;
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
    font-size: 20px;
    color: #8B8888;
    font-weight: bold;

  }
}

.radio-toolbar .img-container:hover {
  border: 1px solid #8B8888;
}

.radio-toolbar input[type="radio"]:checked + .img-container {
  background-color: #E0E0E0;
  font-weight: bold;
}

.btn-container {
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: white;
  padding-top: 30px;
}

@media screen and(min-width: 1025px) and(max-width: 1200px) {
  .grid {
    height: 500px;
  }

  .radio-toolbar {
    width: 200px;
    height: 250px;
  }
  .radio-toolbar .img-container {
    width: 200px;
    height: 250px;

    img {
      width: 200px;
      height: 200px;
    }

    p {
      font-size: 20px;
    }
  }
}

@media screen and(max-width: 1024px) and(min-width: 769px) {
  .grid {
    height: 500px;
  }
  .radio-toolbar {
    width: 200px;
    height: 250px;
  }
  .radio-toolbar .img-container {
    width: 200px;
    height: 250px;

    img {
      width: 200px;
      height: 200px;
    }

    p {
      font-size: 20px;
    }
  }
}

@media screen and(max-width: 768px) and(min-width: 481px) {
  //Disenhomobile
}

@media screen and(max-width: 480px) and(min-width: 320px) {
  //Disenhomobile
}
</style>
