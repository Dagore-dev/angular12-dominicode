import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$: Observable<Product[]> = this.shoppingCartService.getCartAction$()
  quantity$: Observable<number> = this.shoppingCartService.getQuantityAction$() ?? 0
  total$: Observable<number> = this.shoppingCartService.getTotalAction$() ?? 0


  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
  }

}
