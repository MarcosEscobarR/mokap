import { OrderModel } from '~/models/OrderModel'
import { UserModel } from '~/models/UserModel'

export interface EmailSenderModel {
  order: OrderModel[],
  user: UserModel
}
