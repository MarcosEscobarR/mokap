export interface OrderModel {
  color: 'Blanco' | 'Negro',
  size: 'P' | 'M' | 'G' | 'XG' | '2XG',
  quality: 'Media' | 'Alta' | null,
  TShirtBasic: boolean,
  image: string | null,
  location: 'Centro' | 'Pecho' | null,
  quantity: number,
  TShirtType: string,
  ownTShirt: boolean,
  design: 'custom' | 'propio'
}
