import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { StoreComponent } from './category/category.component';
import { ProductsService } from './model/products.service';
import { AuthService } from './auth/auth.service';
import { PRODUCTS } from './model/static.datasource';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { TypeCategoryPipe } from './category/type-category.pipe';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ProductResolveService } from './detail-card/product-resolve.service';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    DashboardComponent,
    DetailCardComponent,
    TypeCategoryPipe,
    HomeComponent,
    CallbackComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService, AuthService, ProductResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
