import { Component, OnInit } from '@angular/core';
import {ProductService} from '../shared/product.service';
import {FormBuilder, FormControl, FormGroup, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel: FormGroup;
  categoryList: string[];

  priceValidator(fc: FormControl) {
    const price = fc.value;
    if (price < 0) {
      return {msg: {failed : '价格不能为负数'}};
    }
    return null;
  }

  constructor(private productService: ProductService) {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: [''],
      price: [null, this.priceValidator],
      category: ['-2']
    });
  }

  ngOnInit() {
    this.categoryList = this.productService.getProductCategories();
  }

  onSearch() {
    if (this.formModel.valid) {

      console.log(this.formModel.value);
    }
  }

}
