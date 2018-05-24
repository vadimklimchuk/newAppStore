import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './products/pages/dashboard/dashboard.component';
import { DetailCardComponent } from './products/pages/detail-card/detail-card.component';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './core/auth/callback/callback.component';
import { ProductResolveService } from './products/pages/detail-card/product-resolve.service';
import { CategoryModule } from './products/pages/category/category.module';
import { AuthGuardService as AuthGuard } from './home/auth-guard.service';

const lazyCategory = 'app/products/pages/category/category.module#CategoryModule';
const lazyHome = 'app/home/home.module#HomeModule';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', loadChildren: lazyCategory },
  { path: 'product/:id', component: DetailCardComponent, resolve: {
    product: ProductResolveService
  } },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
