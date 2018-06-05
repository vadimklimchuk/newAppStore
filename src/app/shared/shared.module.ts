import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from '../home/home.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from '../core/auth/auth.module';
import { LocalStorageService } from '../services/local-storage.service';
import { CartModule } from '../cart/cart.module';


@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    AuthModule,
    HomeModule,
    CartModule,
    HttpClientModule
  ],
  providers: [LocalStorageService],
  declarations: []
})

export class SharedModule { }
