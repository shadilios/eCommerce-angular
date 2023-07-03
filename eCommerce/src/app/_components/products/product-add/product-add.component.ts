import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/_models/category/category.model';
import { ProductDto } from 'src/app/_models/product/productDto.model';
import { CategoriesService } from 'src/app/_services/categories.service';
import { ProductsService } from 'src/app/_services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    image: new FormControl(""),
    price: new FormControl(0),
    categoryId : new FormControl("")
  });


  categories : Category[] = [];

  constructor(private productService: ProductsService, private router: Router, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
    // this.productForm.controls.categoryId = this.categories[0];
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      (response) => {
        this.categories = response;
        console.log(this.categories);
      }
    );
  }

  onSubmit() {
    this.productService.postProduct(this.productForm.value as ProductDto).subscribe({
      complete: () => {
        this.resetForm();
        this.router.navigateByUrl('products');
      },
    });
  }

  resetForm() {
    this.productForm.reset();
  }

}
