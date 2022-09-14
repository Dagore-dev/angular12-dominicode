import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Checkout, DeliveryMode } from './interfaces/checkout.interface';
import { Store } from './interfaces/store.interface';
import { StoresService } from './services/stores.service';

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
  
  constructor(private storesService: StoresService) { }

  ngOnInit(): void {
    this.storesService
      .getStores()
      .pipe(
        tap((response: Store[]) => this.stores = response)
      )
      .subscribe()
  }

  onSelectedOption(deliveryMode: keyof typeof DeliveryMode): void {
    this.model.deliveryMode = DeliveryMode[deliveryMode]
  }

}
