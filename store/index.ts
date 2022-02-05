import { GetterTree, MutationTree } from 'vuex/types/index'
import { OrderModel } from '~/models/OrderModel'
import { UserModel } from '~/models/UserModel'

export const state = () => ({
  orders: [] as OrderModel[],
  user: {} as UserModel,
  order: {
    color: 'Blanco',
    size: 'P',
    quality: 'Media',
    quantity: 1,
    location: 'Centro'
  } as OrderModel,
  navigationStep: 1,
  createOrder: false,
  loading: false
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
      TShirtBasic: false
    } as OrderModel

    state.navigationStep = 1
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
  },
  setOrder (state, order: OrderModel) {
    state.order = { ...state.order, ...order }
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
  loading: state => state.loading
}
