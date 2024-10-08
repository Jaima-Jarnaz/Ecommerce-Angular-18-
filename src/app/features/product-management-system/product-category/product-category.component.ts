import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Observable, map } from 'rxjs';
import { CategoryList, ProductList } from '../model/product';
import { AsyncPipe } from '@angular/common';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalComponent } from '../../../core/components/modal/modal.component';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [
    AsyncPipe,
    NzTabsModule,
    NzInputNumberModule,
    NzRadioModule,
    FormsModule,
    NzCardModule,
    NzAvatarModule,
    NzIconModule,
    ModalComponent,
  ],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss',
})
export class ProductCategoryComponent implements OnInit {
  productService = inject(ProductsService);
  categoryList$: Observable<CategoryList[]> = new Observable<CategoryList[]>();
  productList$: Observable<ProductList[]> = new Observable<ProductList[]>();

  tabs: Array<{ name: string; content: string; disabled: boolean }> = [];
  nzTabPosition: NzTabPosition = 'top';
  selectedIndex = 27;

  getAllCategory() {
    this.categoryList$ = this.productService
      .getAllProductsCategory()
      .pipe(map((item: any) => item.data));
  }

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  log(args: any[]): void {
    // console.log(args);
  }

  tabClicked(args: any[]) {
    console.log(args[1].categoryId);
    this.productList$ = this.productService
      .getProductByCategoryId(args[1].categoryId)
      .pipe(map((item: any) => item.data));
  }

  fetchFirstIndexProducts(firstIndex: number) {
    this.productList$ = this.productService
      .getProductByCategoryId(firstIndex)
      .pipe(map((item: any) => item.data));
  }

  ngOnInit(): void {
    // Get all products list
    this.getAllCategory();

    // Subscribe to category list and load the first category's products after categories are available
    this.categoryList$ = this.productService.getAllProductsCategory().pipe(
      map((item: any) => item.data),
      map((categories: CategoryList[]) => {
        if (categories.length > 0) {
          const firstIndex = categories[0].categoryId;
          this.fetchFirstIndexProducts(firstIndex);
        }
        return categories;
      })
    );
  }
}
