import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comments, Product, ProductService} from '../shared/product.service';
import {WsServiceService} from '../shared/ws-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  comments: Comments[];
  productTitle: string;
  showCommentBox = false;

  newRating = 5;
  newComment = '';
  isWatched: boolean;
  currentPrice: number;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private wsService: WsServiceService) {
  }

  ngOnInit() {
    const productId: number = this.activatedRoute.snapshot.params['productId'];
    this.productTitle = this.activatedRoute.snapshot.params['productTitle'];
    this.productService.getProductById(productId).subscribe(
      (data: Product) => {
        this.product = data;
        this.currentPrice = data.price;
      }
    );
    this.productService.getProductComments(productId).subscribe(
      (data: Comments[]) => {
        this.comments = data;
        console.log('xxx' + this.comments);
      }
    );
  }

  addComment() {
    const comment = new Comments(0, this.product.id, new Date().toISOString(), 'wangpe1a', this.newRating, this.newComment);
    this.comments.unshift(comment);
    const sum = this.comments.reduce((sum1, comment1) => sum1 + comment1.rating, 0);
    this.product.rating = sum / this.comments.length;
    this.newRating = 5;
    this.newComment = '';
    this.showCommentBox = false;
  }


  _ratingChange(value: any) {
    console.log(value);
    this.newRating = value;
  }

  watchProduct() {
    this.isWatched = !this.isWatched;
    this.wsService.createObservableSocket('ws://localhost:8085', this.product.id)
      .subscribe(products => {
        // JSON.parse(products)
        console.log(products);
        console.log(JSON.parse(products));
        let product =  JSON.parse(products).find(p => p.productId === this.product.id);
        this.currentPrice = product.bid;
        console.log(product);
        // // if (products.productId == this.product.id) {
        // this.currentPrice = products.bid;
        //   // console.log(this.currentPrice);
        // }
      });
  }


}
