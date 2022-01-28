export interface UserModel {
  name: string | null,
  email: string | null,
  phone: string | null,
  ruc: string | null,
  payment: 'Efectivo' | 'Transferencia'
}
