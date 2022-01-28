export interface OrderModel {
  color: 'Blanco' | 'Negro',
  size: 'P' | 'M' | 'G' | 'XG' | '2XG',
  quality: 'Media' | 'Alta',
  TShirtBasic: boolean,
  image: string,
  location: 'Centro' | 'Pecho',
  quantity: number,
  TShirtType: string,
}
