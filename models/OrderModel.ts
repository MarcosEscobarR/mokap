export interface OrderModel {
  ownTShirt: boolean,
  color: 'Blanco' | 'Negro',
  size: 'P' | 'M' | 'G' | 'XG' | '2XG',
  quality: 'Media' | 'Alta',
  TShirtBasic: boolean,
  designImage: File,
  location: 'Centro' | 'Pecho',
  quantity: number
}

export interface User {
  name: string,
  email: string,
  phone: string,
  ruc?: string,
  paymentMethod: 'Efectivo' | 'Post'
}
