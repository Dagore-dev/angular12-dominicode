import { Component, OnInit } from '@angular/core'
import { tap } from 'rxjs'
import { Product } from './interfaces/product.interface'
import { ProductsService } from './services/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products!: Product[]
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(
        tap((response: Product[]) => this.products = response)
      )
      .subscribe()
  }

}
