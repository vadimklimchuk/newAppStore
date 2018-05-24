import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { LocalStorageService } from './local-storage.service';
import { CallbackComponent } from './callback/callback.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { DetailCardModule } from './detail-card/detail-card.module';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageAuthService } from './auth/local-storage-auth.service';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    LocalStorageService,
    LocalStorageAuthService,
    {provide: 'baseUrl', useValue: environment.baseUrl}
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
