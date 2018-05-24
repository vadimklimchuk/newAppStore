import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './shared/auth/auth.service';
import { LocalStorageService } from './local-storage.service';
import { CallbackComponent } from './shared/callback/callback.component';
import { CallToActionComponent } from './shared/call-to-action/call-to-action.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './shared/dashboard/dashboard.module';
import { HomeModule } from './shared/home/home.module';
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
    {provide: 'baseUrl', useValue: environment.baseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
