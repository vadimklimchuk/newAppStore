import { Pipe, PipeTransform } from '@angular/core';
import { Product } from "../../shared/product.model";

@Pipe({
  name: 'typeCategory'
})
export class TypeCategoryPipe implements PipeTransform {

  transform(products: Product[], newCategory?: string): Product[] {

    return products.filter(product =>
      product.category.toLowerCase() === newCategory.toLowerCase()
    );
  }
}
