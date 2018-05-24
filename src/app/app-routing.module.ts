import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { DetailCardComponent } from './shared/detail-card/detail-card.component';
import { HomeComponent } from './shared/home/home.component';
import { CallbackComponent } from './shared/callback/callback.component';
import { ProductResolveService } from './shared/detail-card/product-resolve.service';
import { CategoryModule } from './shared/category/category.module';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', loadChildren: 'app/shared/category/category.module#CategoryModule' },
  { path: 'product/:id', component: DetailCardComponent, resolve: {
    product: ProductResolveService
  } },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
