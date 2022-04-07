<template>
  <v-dialog v-model="dialogModel" max-width="1200px">
    <v-card class="pa-lg-10 pa-sm-8 pa-lg-5 pa-xl-10 pa-3">
      <div class="grid">
        <div
          v-for="(item, index) in Object.keys(imageUrls)"
          :key="index"
          class="radio-toolbar"
        >
          <input :id="index" name="design" type="radio" :value="item">
          <label class="img-container" :for="index">
            <img
              :id="index + '-img'"
              :src="imageUrls[item]"
              alt="design"
              @click="handleImageCheck(index, item)"
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
    indexSelected: -1,
    imageUrls: {},
    urlSelected: ''
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
  mounted () {
    const storage = this.$fire.storage
    const imageRef = storage.ref('designs')
    imageRef.listAll().then((p) => {
      p.items.forEach((c) => {
        c.getDownloadURL().then((url) => {
          this.imageUrls[c.name] = url
        })
      })
    })
  },
  methods: {
    handleImageCheck (index, key) {
      this.indexSelected = index
      this.urlSelected = this.imageUrls[key]
    },
    selectImage () {
      this.$store.commit('setOrder', {
        image: this.urlSelected,
        TShirtBasic: false,
        design: 'custom'
      })
      this.$store.commit('setLoading')
      this.dialogModel = false
    },

    getFileName (val) {
      const stringSplitter = val.split('.')
      const fileName = stringSplitter[0]

      try {
        return fileName.replaceAll('_', ' ')
      } catch (e) {
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
  justify-content: center;
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
  .btn-container {
    display: flex;
    justify-content: center;
  }
  .grid {
    height: 500px;
  }
  .radio-toolbar {
    width: 120px;
    height: 200px;
  }
  .radio-toolbar .img-container {
    width: 120px;
    height: 200px;

    img {
      width: 120px;
      height: 150px;
    }

    p {
      font-size: 20px;
    }
  }}
</style>
