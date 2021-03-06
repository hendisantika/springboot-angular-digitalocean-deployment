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

  public updateProduct(product: Product): Observable<Product> {
    const url = this.baseUrl + '/';
    return this.http.put<Product>(url, product);
  }

  public deleteProduct(id: number): Observable<Product> {
    const url = this.baseUrl + '/delete/' + id;
    return this.http.delete<Product>(url);
  }

  // Return assigned variable product
  getter() {
    return this.product;
  }

  // Set Value into variable product
  setter(product: Product) {
    this.product = product;
  }
}
