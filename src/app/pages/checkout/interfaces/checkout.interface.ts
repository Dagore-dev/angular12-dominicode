export interface Checkout {
  name: string,
  store: string,
  shippingAddress: string,
  city: string,
  deliveryMode: DeliveryMode
}

export enum DeliveryMode {
  DELIVERY,
  PICKUP
}
