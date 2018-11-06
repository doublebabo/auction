import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RoutingModule} from './routing.module';
import { HomeComponent } from './home/home.component';
import {ProductService} from './shared/product.service';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { BizcardRecogComponent } from './bizcard-recog/bizcard-recog.component';
import { SafePipe } from './pipe/safe.pipe';
import {WsServiceService} from './shared/ws-service.service';
import { WsComponent } from './ws/ws.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe,
    BizcardRecogComponent,
    SafePipe,
    WsComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ProductService, WsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
