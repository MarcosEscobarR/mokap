<template>
  <v-dialog v-model="dialogModel" max-width="1360px">
    <v-card class="pa-10">
      <div class="grid">
        <div
          v-for="(item, index) in itemNames"
          :key="index"
          class="radio-toolbar"
          @click="selectImage(item, index)"
        >
          <input :id="index" name="design" type="radio" :value="item">
          <label class="img-container" :for="index"><img :src="item" alt="design">
            <p>{{ getFileName(item) }}</p></label>
        </div>
      </div>
      <div class="btn-container">
        <custom-button title="Seleccionar" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import DesignPaths from '@/helpers/DesignPaths'

export default {
  name: 'CurrentDesignsDialog',
  props: {
    value: {
      type: Boolean
    }
  },
  data: () => ({
    itemNames: DesignPaths,
    indexToChecked: -1,
    fileSelected: null
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
    selectImage (item, index) {
      // reset index
      this.indexToChecked = -1
      this.indexToChecked = index
      this.fileSelected = item
    },
    getFileName (val) {
      const stringSplitter = val.split('/')
      const fileName = stringSplitter[1].slice(0, -4)

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
  width: 300px;
  height: 350px;
  margin: 5px;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  height: 800px;
  overflow: auto;
}

.radio-toolbar input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

 .radio-toolbar .img-container {
  width: 300px;
  height: 350px;
  cursor: pointer;

  img {
    object-fit: contain;
    width: 300px;
    height: 300px;
  }

  p {
    text-align: center;
    font-size: 20px;
    color: #8B8888;
    font-weight: bold;

  }
}

.radio-toolbar .img-container:hover {
  border: 1px solid #43BFA2;
}

.radio-toolbar input[type="radio"]:checked + .img-container {
  background-color: #43BFA2;
  font-weight: bold;
}
.btn-container {
  width: 100%;
  display: flex;
  justify-content: end;
  background-color: white;
  padding-top: 30px;
}
</style>
