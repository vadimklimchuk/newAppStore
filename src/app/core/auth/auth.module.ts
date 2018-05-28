import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './shared/auth.service';
import { LocalStorageAuthService } from './shared/local-storage-auth.service';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CallbackComponent],
  providers: [
    AuthService,
    LocalStorageAuthService
  ]
})

export class AuthModule { }
