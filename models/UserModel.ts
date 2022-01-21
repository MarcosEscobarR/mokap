export interface UserModel {
  name: string,
  email: string,
  phone: string,
  ruc: string,
  payment: 'Efectivo' | 'Transferencia'
}
