<template>
  <v-data-table
    hide-default-footer
    :headers="datatableHeaders"
    :items="orders"
  >
    <template #header.quantity>
      <p class="subt">
        Cantidad
      </p>
    </template>
    <template #header.total>
      <p class="subt">
        Total
      </p>
    </template>
    <template #item.tshirt="{item}">
      <div class="info-text">
        <p>
          {{ item.TShirtBasic ? 'Remera Básica' : 'Remera con Diseño' }}
        </p>
      </div>
    </template>
    <template #item.total="{item}">
      <div class="info-text">
        <p>
          {{ (item.quantity * item.total).toLocaleString() }}
        </p>
      </div>
    </template>
    <template #item.quantity="{item}">
      <div class="info-text">
        <p>
          {{ item.quantity }}
        </p>
      </div>
    </template>
    <template #item.remove="{item}">
      <v-btn icon @click="$store.commit('removeOrder', item)">
        <v-icon>
          mdi-trash-can-outline
        </v-icon>
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'CartDatatable',
  props: {
    orders: []
  },
  data: () => ({
    datatableHeaders: [
      {
        text: '',
        value: 'tshirt'
      },
      {
        text: 'Cantidad',
        value: 'quantity',
        cellClass: 'header-text'
      },
      {
        text: 'Total',
        value: 'total',
        cellClass: 'header-text'
      },
      {
        text: '',
        width: '50',
        value: 'remove'
      }
    ]
  }),
  computed: {
    total: {
      get () {
        return this.$store.getters.total
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
