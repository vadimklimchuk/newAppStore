import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { DetailCardModule } from './detail-card/detail-card.module';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageAuthService } from './auth/local-storage-auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    CategoryModule,
    HomeModule,
    DetailCardModule
  ],
  providers: [AuthService, LocalStorageService, LocalStorageAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
