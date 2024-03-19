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
import { CategoryEditComponent } from './_components/categories/category-edit/category-edit.component';
import { NotFoundComponent } from './_components/general/not-found/not-found.component';
import { UnauthorizedComponent } from './_components/general/unauthorized/unauthorized.component';
import { RolesGuardService } from './_services/roles-guard.service';
import { ProductEditComponent } from './_components/products/product-edit/product-edit.component';
import { ProductAddComponent } from './_components/products/product-add/product-add.component';
import { ProductComponent } from './_components/products/product/product.component';
import { SignInTwitterComponent } from './_components/general/sign-in-twitter/sign-in-twitter.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  {
    path: 'sign-in', component: SignInComponent,
  },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'register-role', component: SignUpRoleComponent, canActivate: [AuthGuardService, RolesGuardService], data: { roles: ["Admin"] } },
  {
    path: 'categories', children: [
      { path: '', component: CategoriesListComponent },
      { path: 'add-category', component: CategoryAddComponent, canActivate: [AuthGuardService, RolesGuardService], data: { roles: ["Admin"] } },
      {
        path: 'edit-category', children: [
          { path: ':id', component: CategoryEditComponent, canActivate: [AuthGuardService, RolesGuardService], data: { roles: ["Admin", "Editor"] } },
        ]
      },
      {path: 'twitter', component: SignInTwitterComponent}

    ]
  },
  {
    path: 'products', children: [
      { path: '', component: ProductsListComponent },
      { path: 'add-product', component: ProductAddComponent, canActivate: [AuthGuardService, RolesGuardService], data: { roles: ["Admin"] } },
      { path: 'category/:categoryId', component: ProductsListComponent },
      {
        path: 'edit-product', children: [
          { path: ':id', component: ProductEditComponent, canActivate: [AuthGuardService, RolesGuardService], data: { roles: ["Admin", "Editor"] } }
        ]
      },
    ]
  },

  { path: 'unauthorized', component: UnauthorizedComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
