import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/general/home/home.component';
import { SignInComponent } from './_components/general/sign-in/sign-in.component';
import { SignUpComponent } from './_components/general/sign-up/sign-up.component';
import { SignUpRoleComponent } from './_components/general/sign-up-role/sign-up-role.component';
import { CategoriesListComponent } from './_components/categories/categories-list/categories-list.component';
import { ProductsListComponent } from './_components/products/products-list/products-list.component';
import { CategoryAddComponent } from './_components/categories/category-add/category-add.component';
import { AuthGuardService } from './_services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'register-role', component: SignUpRoleComponent, canActivate: [AuthGuardService] },
  {
    path: 'categories', children: [
      { path: '', component: CategoriesListComponent },
      { path: 'add-category', component: CategoryAddComponent },
    ]
  },
  { path: 'products', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
