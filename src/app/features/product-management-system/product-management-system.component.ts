import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ProductsService } from './service/products.service';
import { APIResponseModel } from '../../models/global';
import { ProductList } from './model/product';
import { NzTableModule } from 'ng-zorro-antd/table';
import { DatePipe } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ModalComponent } from '../../core/components/modal/modal.component';

@Component({
  selector: 'app-product-management-system',
  standalone: true,
  imports: [NzTableModule, DatePipe, NzIconModule, ModalComponent],
  templateUrl: './product-management-system.component.html',
  styleUrl: './product-management-system.component.scss',
})
export class ProductManagementSystemComponent implements OnInit, OnDestroy {
  productService = inject(ProductsService);
  productList = signal<ProductList[]>([]);

  isModalVisible = false;
  productId = 0;

  onOkModal() {
    this.productService
      .deleteProductById(this.productId)
      .subscribe((res: APIResponseModel) => {
        if (res.result === true) {
          this.isModalVisible = !this.isModalVisible;
        }
      });
  }

  onCancelModal() {
    this.isModalVisible = !this.isModalVisible;
  }

  onDeleteIconClicked(id: number) {
    this.isModalVisible = !this.isModalVisible;
    this.productId = id;
  }

  fetchAllProducts() {
    this.productService.getAllProducts().subscribe((res: APIResponseModel) => {
      this.productList.set(res.data);
    });
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }
  ngOnDestroy(): void {
    // this.productList.forEach(element => {
    //   element.uns
    // });
  }
}
