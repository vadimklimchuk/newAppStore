import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { JwtAuthService } from './services/jwt-auth.service';

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
  providers: [JwtAuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
