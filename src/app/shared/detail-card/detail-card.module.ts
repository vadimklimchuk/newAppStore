import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsService } from '../../model/products.service';
import { ProductResolveService } from './product-resolve.service';
import { DetailCardComponent } from './detail-card.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [DetailCardComponent],
  providers: [ProductsService, ProductResolveService]
})
export class DetailCardModule { }
