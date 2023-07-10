import { Component } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent {

  products: any;

  constructor(private productService: ProductService) {}

    ngOnInit() {
      //this.products = this.productService.getproducts()

      const productObservable = this.productService.getProducts();
      productObservable.subscribe({
    next: (data) => {
      console.log('次のデータが出力されました：' + data);
      this.products = data
    },
    error: (err) => {
      console.log('次のエラーが発生しました: ' + err);
    }
  });

  } 
}
