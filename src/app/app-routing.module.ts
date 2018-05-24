import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './products/pages/dashboard/dashboard.component';
import { DetailCardComponent } from './products/components/detail-card/detail-card.component';
import { HomeComponent } from './core/auth/home/home.component';
import { CallbackComponent } from './core/auth/callback/callback.component';
import { ProductResolveService } from './products/components/detail-card/product-resolve.service';
import { CategoryModule } from './products/pages/category/category.module';

const lazyCategory = 'app/products/pages/category/category.module#CategoryModule';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', loadChildren: lazyCategory },
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
