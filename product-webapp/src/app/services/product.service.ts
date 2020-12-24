import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product = new Product();
  private baseUrl: any = 'http://localhost:8080/product';

  constructor(private http: HttpClient) {
  }

}
