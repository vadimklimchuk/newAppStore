import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeModule } from '../home/home.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from '../core/auth/auth.module';
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
  declarations: []
})

export class SharedModule { }
