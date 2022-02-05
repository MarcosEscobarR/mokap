import { GetterTree, MutationTree } from 'vuex/types/index'
import { OrderModel } from '~/models/OrderModel'
import { UserModel } from '~/models/UserModel'
import { PriceCalculator } from '~/helpers/PriceCalculator'

export const state = () => ({
  orders: [] as OrderModel[],
  user: {} as UserModel,
  order: {
    color: 'Blanco',
    size: 'P',
    quality: 'Media',
    quantity: 1|,
    location: 'Centro',
    ownTShirt: false,
    TShirtBasic: true
  } as OrderModel,
  navigationStep: 1,
  createOrder: false,
  loading: false,
  total: 0
})

type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  setLoading (state) {
    state.loading = !state.loading
  },
  reset (state) {
    state.order = {
      color: 'Blanco',
      size: 'P',
      quality: 'Media',
      quantity: 1,
      location: 'Centro',
      TShirtBasic: false,
      ownTShirt: false,
      image: null
    } as OrderModel

    state.navigationStep = 1
    state.total = 0
  },

  resetCart (state) {
    state.order = {
      color: 'Blanco',
      size: 'P',
      quality: 'Media',
      quantity: 1,
      location: 'Centro',
      TShirtBasic: false
    } as OrderModel
    state.orders = [] as OrderModel[]
    state.createOrder = false
    state.user = {} as UserModel
    state.navigationStep = 1
  },
  newOrder (state) {
    if (Object.values(state.order).includes(undefined)) { return }
    state.orders.push({ ...state.order, TShirtType: state.order.image ? 'Remera Con Diseño' : 'Remera Basica' })
    state.total = PriceCalculator(state.orders)
  },
  setOrder (state, order: OrderModel) {
    console.log(state.order)
    state.order = { ...state.order, ...order }
    state.total = PriceCalculator([state.order])
  },
  nextStep (state, step) {
    state.navigationStep = step
  },
  createNewOrder (state, val) {
    state.createOrder = val || !state.createOrder
  },
  removeOrder (state, order) {
    const index = state.orders.indexOf(order)
    state.orders.splice(index, 1)
  },
  setUser (state, user) {
    state.user = user
  }
}

export const getters: GetterTree<State, State> = {
  orders: state => state.orders,
  order: state => state.order,
  step: state => state.navigationStep,
  createNewOrder: state => state.createOrder,
  user: state => state.user,
  loading: state => state.loading,
  total: state => state.total
}
