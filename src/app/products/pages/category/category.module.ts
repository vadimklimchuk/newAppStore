import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './category.component';
import { TypeCategoryPipe } from './type-category.pipe';
import { ProductsService } from '../../shared/products.service';

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
