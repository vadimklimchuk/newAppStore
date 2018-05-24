import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { LocalStorageService } from '../local-storage.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [LocalStorageService, AuthGuardService]
})
export class HomeModule { }
