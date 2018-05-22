import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from "../model/product.model";
import { ProductsService } from '../model/products.service';

@Component({
  selector: 'app-detail-card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.css']
})
export class DetailCardComponent implements OnInit {
  public product: Product;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id') - 1;
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
