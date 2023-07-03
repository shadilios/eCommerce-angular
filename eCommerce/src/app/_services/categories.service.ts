import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../_files/constant';
import { Observable } from 'rxjs';
import { Category } from '../_models/category/category.model';
import { CategoryDto } from '../_models/category/categoryDto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUrl = API_URL + "/categories";

  constructor(private http: HttpClient) { }

  /**
   * Gets all categories
   * @returns observable
   */
  getCategories(): Observable<any> {
    return this.http.get(this.categoriesUrl);
  }

  /**
   * Gets a single category by ID
   * @param categoryId
   */
  getCategory(categoryId: any): Observable<any> {
    return this.http.get(this.categoriesUrl + `/${categoryId}`);
  }

  /**
   * Update Category
   * @param category
   * @param categoryId
   */
  putCategory(category: Category, categoryId: any) {
    return this.http.put(this.categoriesUrl + `/${categoryId}`, category);
  }

  /**
   * posts a category object to api
   * @param category category object
   * @returns observable
   */
  postCategory(category: CategoryDto): Observable<object> {
    return this.http.post(this.categoriesUrl, category);
  }

  /**
   * Deletes a category
   * @param catId Category Id
   */
  deleteCategory(catId: any) {
    return this.http.delete(this.categoriesUrl + `/${catId}`);
  }
}
