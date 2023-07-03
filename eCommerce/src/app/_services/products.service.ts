import { Injectable } from '@angular/core';
import { API_URL } from '../_files/constant';
import { Product } from '../_models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDto } from '../_models/product/productDto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsUrl = API_URL + "/products";

  constructor(private http : HttpClient) { }

  getProducts() : Observable<any>{
    return this.http.get(this.productsUrl);
  }

  getProductsByCategory(categoryId: any) : Observable<any>{
    return this.http.get(`${this.productsUrl}/category/${categoryId}`);
  }

  postProduct(product: ProductDto): Observable<any>{
    return this.http.post(this.productsUrl, product);
  }

  getProduct(id: any) {

  }

  putProduct(id: any, product: Product) {

  }

  deleteProduct(productId: any) {
    return this.http.delete(`${this.productsUrl}/${productId}`);
  }
}
