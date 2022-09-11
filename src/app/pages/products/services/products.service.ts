import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiURL: string = environment.apiURL + '/products'

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL)
  }
}
