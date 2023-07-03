import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category/category.model';
import { CategoriesService } from 'src/app/_services/categories.service';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';
import { UserRolesService } from 'src/app/_services/user-roles.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  categories?: Category[];

  isAdmin = false;
  isEditor = false;
  isUser = false;

  roles = [""];


  constructor(private categories_service: CategoriesService, private router: Router, private rolesService : UserRolesService) { }

  ngOnInit(): void {
    this.getCategories();
    this.getRoles();
  }

  getRoles() {
    this.rolesService.loggedRoles$.subscribe(
      (roles) => {
        this.roles = roles;
        this.setConditions(this.roles);
      }
    );
  }

  setConditions(roles: string[]) {
    if (roles.includes("Admin"))
      this.isAdmin = true;
    if (roles.includes("Editor"))
      this.isEditor = true;
    if (roles.includes("User"))
      this.isUser = true;
  }

  getCategories(){
    this.categories_service.getCategories().subscribe(
      (response) => {
        this.categories = response;
      }
    );
  }

  editClicked(category: Category, catId: any) {
    this.router.navigate(['/categories/edit-category', catId]);
  }

  infoClicked(catId: any) {
    console.log(`info clicked on ${catId}`);
    this.router.navigateByUrl(`/products/category/${catId}`)
  }

//confirm delete page
  deleteClicked(catId: any) {
    this.categories_service.deleteCategory(catId).subscribe({
      next: (value) => {
        console.log("value: " + value);
      },
      error: (err) => {
        console.log("error: " + err);
      },
      complete: () => {
        console.log("complete");
        this.getCategories();
      },
    });
  }

}
