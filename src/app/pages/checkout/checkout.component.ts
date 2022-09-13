import { Component, OnInit } from '@angular/core';
import { Checkout, DeliveryMode } from './interfaces/checkout.interface';
import { Store } from './interfaces/store.interface';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  model: Checkout = {
    name: '',
    store: '',
    shippingAddress: '',
    city: '',
    deliveryMode: DeliveryMode.DELIVERY
  }
  stores!: Store[]
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedOption(deliveryMode: keyof typeof DeliveryMode): void {
    this.model.deliveryMode = DeliveryMode[deliveryMode]
  }

}
