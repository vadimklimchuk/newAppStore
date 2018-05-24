import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocalStorageService } from './local-storage.service';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
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
  providers: [
    LocalStorageService,
    {provide: 'baseUrl', useValue: environment.baseUrl}
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
