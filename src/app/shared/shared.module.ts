import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';


import { HomeModule } from '../home/home.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from '../core/auth/auth.module';
import { LocalStorageService } from '../services/local-storage.service';
import { CartModule } from '../cart/cart.module';
import { JwtAuthService } from '../services/jwt-auth.service';
@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    AuthModule,
    HomeModule,
    CartModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [LocalStorageService, JwtAuthService],
  declarations: []
})

export class SharedModule { }
