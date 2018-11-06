import { Component, OnInit } from '@angular/core';
import {Bizcard, ProductService} from '../shared/product.service';
import {HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-bizcard-recog',
  templateUrl: './bizcard-recog.component.html',
  styleUrls: ['./bizcard-recog.component.css']
})
export class BizcardRecogComponent implements OnInit {

  bizcard: Bizcard = new Bizcard();
  bizcardUrl = '';
  bizcardFile: any;
  sendUrl = '';
  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  fileChange(ev) {
    this.bizcardFile = ev.srcElement.files[0];
    this.bizcardUrl = window.URL.createObjectURL(this.bizcardFile);
  }

  onSubmit() {
    const formData = new HttpParams().append('PIN', '290BD181296').append('user', '904615904@qq.com').append('pass', 'D8DQ7HMRTCQJ3MPK').append('json', '1').append('lang', '2').append('size', this.bizcardFile.size);
    const formHead = new HttpHeaders();
    formData.append('user', '904615904@qq.com');
    formData.append('pass', 'D8DQ7HMRTCQJ3MPK');
    formData.append('json', '1');
    formData.append('lang', '2');
    formData.append('size', this.bizcardFile.size);
    formHead.set('Content-Type', 'application/x-www-form-urlencoded');
    // console.log(formData);
    this.productService.callBizcardRecog(this.bizcardFile, formData, formHead).subscribe((resp) => {
      console.log(JSON.stringify(resp));
      this.bizcard.name = resp.formatted_name[0].item;
      this.bizcard.title = resp.title[0].item;
      this.bizcard.email = resp.url[0].item;
      this.bizcard.address = resp.address[0].item.country + resp.address[0].item.locality + resp.address[0].item.street;
      this.bizcard.company = resp.organization[2].item.name;
      this.bizcard.telephoneNumer = resp.telephone[0].item.number;
      this.bizcard.mobileNumber = resp.telephone[1].item.number;
      console.log(this.bizcard);
    });
  }

}
