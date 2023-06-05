import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category.model';
import { CategoriesService } from 'src/app/_services/categories.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories? : Category[];

  constructor(private categories_service: CategoriesService) { }

  ngOnInit(): void {
    this.categories_service.getCategories().subscribe(
      (response) => {
        console.log(response);
        this.categories = response;
      }
    );
  }

}
