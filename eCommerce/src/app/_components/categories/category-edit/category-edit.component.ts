import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category/category.model';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  categoryId?: number;

  currentCategory?: Category;

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });
  constructor(
    private route: ActivatedRoute,
    private categories_service: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.params['id'];
    console.log(this.categoryId);

    this.categories_service.getCategory(this.categoryId).subscribe({
      error: (error) => {
        // go to error page
      },
      next: (value) => {
        // set form initial data to value
        this.currentCategory = value as Category;
        this.categoryForm = new FormGroup({
          name: new FormControl(this.currentCategory.name),
          description: new FormControl(this.currentCategory.description),
          image: new FormControl(this.currentCategory.image),
        });
      },
      complete: () => {
        //idk
      },
    });
  }

  onEditComplete() {
    console.log(this.categoryForm.value as Category);
    const category: Category = {
      id: this.categoryId!,
      name: this.categoryForm.controls.name.value!,
      description: this.categoryForm.controls.description.value!,
      image: this.categoryForm.controls.image.value!,
    };
    this.categories_service
      .putCategory(category, this.categoryId)
      .subscribe({
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('complete edit');
          this.resetForm();
          this.router.navigateByUrl("/categories")
        },
        next: (value) => {
          console.log(value);
        },
      });
  }

  resetForm(){
    this.categoryForm.reset();
  }
}
