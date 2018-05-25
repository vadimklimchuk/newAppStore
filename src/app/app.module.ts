import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LocalStorageService } from './services/local-storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/auth/auth.module';
import { ProductsModule } from './products/products.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AuthModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
