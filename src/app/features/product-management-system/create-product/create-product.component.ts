import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../../core/components/button/button.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
  FormArray,
  NgModel,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { inject } from '@angular/core';
import { ProductsService } from '../service/products.service';
import { Observable, map } from 'rxjs';
import { CategoryList, ProductList } from '../model/product';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    CommonModule,
    NzFlexModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
    NzDatePickerModule,
    NzSelectModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent implements OnInit {
  // productFormData: FormGroup = new FormGroup({
  //   productName: new FormControl(''),
  // });

  productService = inject(ProductsService);
  categoryList$: Observable<CategoryList[]> = new Observable<CategoryList[]>();
  getAllCategory() {
    this.categoryList$ = this.productService
      .getAllProductsCategory()
      .pipe(map((item: any) => item.data));
  }

  dynamicForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  date = null;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onSubmitForm() {
    // const formValues = this.productFormData.value;
    // console.log(formValues);
    if (this.dynamicForm.valid) {
      console.log(this.dynamicForm.value);
    } else {
      console.log('Form is invalid');
    }
  }

  get inputFields() {
    return this.dynamicForm.get('inputFields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      productId: [0],
      productSku: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: [0, [Validators.required, Validators.min(1)]],
      productShortName: ['', Validators.required],
      productDescription: ['', Validators.required],
      createdDate: [new Date(), Validators.required],
      deliveryTimeSpan: ['', Validators.required],
      categoryId: [2147483647, Validators.required],
      productImageUrl: ['', Validators.required],
      userId: [0],
    });
    this.inputFields.push(fieldGroup);
  }

  ngOnInit(): void {
    // Initialize the form with a FormArray named 'inputFields'
    this.dynamicForm = this.fb.group({
      inputFields: this.fb.array([]),
    });
    this.addField();
    this.getAllCategory();
  }
}
