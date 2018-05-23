import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { StoreComponent } from './category.component';
import { ProductsService } from '../model/products.service';
import { TypeCategoryPipe } from './type-category.pipe';
import { DetailCardModule } from '../detail-card/detail-card.module';

@NgModule({
  declarations: [
    StoreComponent,
    TypeCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailCardModule
  ],
  providers: [ProductsService]
})
export class CategoryModule { }
