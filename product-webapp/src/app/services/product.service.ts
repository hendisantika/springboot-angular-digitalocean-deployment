import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public product: Product = new Product();
  private baseUrl: any = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {
  }

  public getAllProduct(): Observable<Product> {
    const url = this.baseUrl + '/';
    return this.http.get<Product>(url);
  }

  public addProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/';
    return this.http.post<Product>(url, product);
  }
}
