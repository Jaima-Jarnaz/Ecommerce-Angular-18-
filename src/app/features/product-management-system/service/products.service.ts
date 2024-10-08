import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../../models/global';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiBaseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiBaseUrl + 'GetAllProducts');
  }

  getAllProductsCategory(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiBaseUrl + 'GetAllCategory');
  }

  getProductByCategoryId(categoryId: number): Observable<APIResponseModel> {
    const url = `${this.apiBaseUrl}GetAllProductsByCategoryId?id=${categoryId}`;
    return this.http.get<APIResponseModel>(url);
  }
  deleteProductById(productId: number): Observable<APIResponseModel> {
    const url = `${this.apiBaseUrl}DeleteProductById?id=${productId}`;
    return this.http.get<APIResponseModel>(url);
  }
}
