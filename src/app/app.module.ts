import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgProgressInterceptor } from 'ngx-progressbar';

import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { LocalStorageService } from './services/local-storage.service';
import { JwtAuthService } from './services/jwt-auth.service';
import { AuthInterceptor } from './http-interceptors/jwtAuth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    JwtAuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
