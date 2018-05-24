import { Component, OnInit } from '@angular/core';
import { Product } from "../../shared/product.model";
import { ProductsService } from "../../../services/products.service";

@Component({
  selector: 'app-store',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class StoreComponent implements OnInit {
  public selectedCategory: string = 'Category 1';
  public products: Product[] = [];

  public menuCategories: Array<string> = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  changeCategory(newCategory?: string): void {
    this.selectedCategory = newCategory;
  }
}
