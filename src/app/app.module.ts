import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CallToActionComponent,
    CartSummaryComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
