import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/app/_models/categoryDto.model';
import { CategoriesService } from 'src/app/_services/categories.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl(""),
    description: new FormControl(""),
    image: new FormControl(""),
  });

  constructor(private categories_service: CategoriesService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.categoryForm.value as CategoryDto);

    this.categories_service.postCategory(this.categoryForm.value as CategoryDto).subscribe({
      complete: () => {
        this.resetForm();
        this.router.navigateByUrl('categories');
      },
    });
  }

  resetForm() {
    this.categoryForm.reset();
  }
}
