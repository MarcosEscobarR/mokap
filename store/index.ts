import { GetterTree, MutationTree } from 'vuex/types/index'
import { OrderModel } from '~/models/OrderModel'

export const state = () => ({
  orders: [] as OrderModel[],
  order: {} as OrderModel,
  navigationStep: 1 as number,
  createOrder: false
})

type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  setOrder (state) {
    if (Object.values(state.order).includes(undefined)) { return }
    state.orders.push(state.order)
  },

  newOrder (state, order: OrderModel) {
    state.order = { ...state.order, ...order }
  },

  nextStep (state, step) {
    state.navigationStep = step
  },
  createNewOrder (state) {
    state.createOrder = !state.createOrder
  }
}

export const getters: GetterTree<State, State> = {
  orders: state => state.orders,
  order: state => state.order,
  step: state => state.navigationStep,
  createNewOrder: state => state.createOrder
}
