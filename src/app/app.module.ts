import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { LocalStorageService } from './local-storage.service';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './core/auth/auth.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [LocalStorageService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
