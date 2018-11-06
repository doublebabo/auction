import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, JsonpClientBackend} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private comments: Comments[] = [
  //   new Comments(1, 1, '2018-10-10 22:22:22', '张三', 3.4, '东西不错'),
  //   new Comments(1, 2, '2018-10-11 22:24:22', '王五', 3.5, '东西还阔以'),
  //   new Comments(1, 3, '2018-10-12 22:26:22', '李四', 3.6, '东西过得去'),
  //   new Comments(1, 4, '2018-10-13 22:29:22', '赵六', 4.2, '请继续保持')
  // ];

  // private products: Product[] = [
  //   new Product(1, 'No 1 Product', 1.99, 3.5, '这是我的第1个商品在Angular学习实战时创建的', ['硬件设备', '电子产品']),
  //   new Product(2, 'No 2 Product', 2.99, 4.5, '这是我的第2个商品在Angular学习实战时创建的', ['图书', '电子产品']),
  //   new Product(3, 'No 3 Product', 3.99, 3.5, '这是我的第3个商品在Angular学习实战时创建的', ['硬件设备', '图书']),
  //   new Product(4, 'No 4 Product', 4.99, 2.5, '这是我的第4个商品在Angular学习实战时创建的', ['硬件设备'])
  // ];

  constructor(private http: HttpClient) {
  }

  getProductList(): Observable<any> {
    return this.http.get('/api/products');
  }

  getProductById(id: number): Observable<any> {
    return this.http.get('/api/product/' + id);
  }

  getProductComments(id: number): Observable<any> {
  return this.http.get('/api/product/' + id + '/comments');
  }

  getProductCategories(): string[] {
    return ['硬件设备', '电子产品', '图书'];
  }

  // callBizcardRecog(file: any, formData: HttpParams , formHeader: HttpHeaders) {
  callBizcardRecog(file: any, formData: HttpParams, formHeader: HttpHeaders): Observable<any> {
    if (!file) {
      return;
    }
    return this.http.post('/BCRService/BCR_VCF2', file, {headers: formHeader, params: formData});
  }
}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }

}

export class Comments {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {

  }

}

export class Bizcard {
  public name: string;
  public telephoneNumer: string;
  public mobileNumber: string;
  public company: string;
  public department: string;
  public title: string;
  public address: string;
  public email: string;
}
