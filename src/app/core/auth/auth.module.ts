import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { LocalStorageAuthService } from './shared/local-storage-auth.service';
import { CallbackComponent } from './callback/callback.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../../app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CallbackComponent, HomeComponent],
  providers: [
    AuthService,
    LocalStorageAuthService
  ]
})
export class AuthModule { }
