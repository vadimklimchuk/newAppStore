import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';
import { StoreComponent } from './category.component';
import { ProductsService } from '../model/products.service';
import { TypeCategoryPipe } from './type-category.pipe';
import { DetailCardModule } from '../detail-card/detail-card.module';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StoreComponent,
    TypeCategoryPipe
  ],
  exports: [RouterModule],
  providers: [ProductsService]
})
export class CategoryModule { }
