import { OrderModel } from '~/models/OrderModel'

export function PriceCalculator (orders: OrderModel[]): number {
  console.log(orders)
  let price = 0

  orders.forEach((order) => {
    if (order.ownTShirt) {
      if (order.TShirtBasic) {
        return
      }
      if (order.color === 'Blanco') {
        if (order.location === 'Centro') {
          price += 28000 * order.quantity
        } else {
          price += 23000 * order.quantity
        }
      } else if (order.location === 'Centro') {
        price += 43000 * order.quantity
      } else {
        price += 28000 * order.quantity
      }
    } else if (order.color === 'Blanco') {
      if (order.quality === 'Media') {
        if (order.TShirtBasic) {
          price += 25000 * order.quantity
        } else if (order.location === 'Centro') {
          price += 53000 * order.quantity
        } else {
          price += 48000 * order.quantity
        }
      } else if (order.TShirtBasic) {
        price += 45000 * order.quantity
      } else if (order.location === 'Centro') {
        price += 90000 * order.quantity
      } else {
        price += 90000 * order.quantity
      }
    } else if (order.quality === 'Media') {
      if (order.TShirtBasic) {
        price += 25000 * order.quantity
      } else if (order.location === 'Centro') {
        price += 68000 * order.quantity
      } else {
        price += 53000 * order.quantity
      }
    } else if (order.TShirtBasic) {
      price += 45000 * order.quantity
    } else if (order.location === 'Centro') {
      price += 90000 * order.quantity
    } else {
      price += 90000 * order.quantity
    }
  })

  return price
}
