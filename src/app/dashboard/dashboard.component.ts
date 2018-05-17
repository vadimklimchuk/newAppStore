import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product.model';
import { ProductsService } from '../model/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];

  public list: string = null;
  public bgDash = 'white';

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
    this.getBackground();
    this.getViewDashboard()
  }

  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(product => this.products = product);
  }

  getBackground():void {    
    const storageBg = localStorage.getItem('obj');
    const json = JSON.parse(storageBg);
    
    this.bgDash = json.background;
  }

  getViewDashboard() {
    const storageDashboard = localStorage.getItem('obj');
    const json = JSON.parse(storageDashboard);

    if (json.viewDashboard === 'list') {
      this.list = json.viewDashboard;
    }
    
    console.log(this.list);
  }
}
