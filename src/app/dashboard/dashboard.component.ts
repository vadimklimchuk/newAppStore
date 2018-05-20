import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { ProductsService } from '../model/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products: Product[] = [];

  public list: string = null;
  public bgDash = 'white';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getBackground();
    this.getViewDashboard();
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
  }

  getBackground(): void {
    const storageBg = localStorage.getItem('bg');
    const bg = JSON.parse(storageBg);

    if (bg !== null) {
      this.bgDash = bg;
    }
  }

  getViewDashboard(): void {
    const storageDashboard = localStorage.getItem('view');
    const view = JSON.parse(storageDashboard);

    if (view !== null && view === 'list') {
      this.list = view;
    }
  }
}
