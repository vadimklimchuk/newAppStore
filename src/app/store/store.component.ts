import { Component, OnInit } from '@angular/core';
import { Product } from "../model/product.model";
import { ProductsService } from "../model/products.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory = 'Category 1';
  public products: Product[];

  public menuCategories: Array<string> = ['Category 1', 'Category 2', 'Category 3']

  constructor(private productsService: ProductsService) { }

  ngOnInit(){
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products
      })
  }

  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
