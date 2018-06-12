import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

import { Observable } from 'rxjs/Observable';

import { Product } from '../../shared/product.model';
import { ProductsService } from '../../../services/products.service';
import { LocalStorageService } from '../../../services/local-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public products: Product[] = [];

  public list: string = null;
  public bgDash = "#F0F1F2";

  constructor(private productsService: ProductsService,
              private localStorage: LocalStorageService,
              private ngProgress: NgProgress) { }

  ngOnInit() {
    this.getProducts();
    this.getBackground();
    this.getViewDashboard();
  }

  getProducts(): void {
    this.ngProgress.start();
    
    this.productsService.getProducts()
      .subscribe(product => {
        this.products = product
        this.ngProgress.done();
      });
  }

  getBackground(): void {
    this.bgDash = this.localStorage.getBackground();
  }

  getViewDashboard(): void {
    this.list = this.localStorage.getViewDashboard();
  }
}
