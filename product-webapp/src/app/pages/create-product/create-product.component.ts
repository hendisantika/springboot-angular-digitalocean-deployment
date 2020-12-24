import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public product: Product;

  constructor(
    private route: Router,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.product = this.productService.getter();
  }

  public goToList(): void {
    this.route.navigate(['/']);
  }

}
