import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../_files/constant';
import { Observable } from 'rxjs';
import { Category } from '../_models/category.model';
import { CategoryDto } from '../_models/categoryDto.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoriesUrl = API_URL + "/categories";

  constructor(private http: HttpClient) { }

  getCategories() : Observable<any>{
    return this.http.get(this.categoriesUrl);
  }

  postCategory(category:CategoryDto): Observable<object>{
    return this.http.post(this.categoriesUrl, category);
  }
}
