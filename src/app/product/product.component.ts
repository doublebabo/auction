import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Array<Product>;

    imgUrl = 'http://placehold.it/320x150';

  titleFilter: FormControl = new FormControl();

  keyword: string;



  constructor(private productService: ProductService) {
    console.log('enter ProductComponent');
    this.titleFilter.valueChanges.subscribe(
      value => this.keyword = value
    );
  }

  ngOnInit() {
     this.productService.getProductList().subscribe((value => this.products = value));
  }
}


