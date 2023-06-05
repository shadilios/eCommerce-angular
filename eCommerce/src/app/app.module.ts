import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoriesListComponent } from './_components/categories/categories-list/categories-list.component';
import { CategoryViewComponent } from './_components/categories/category-view/category-view.component';
import { CategoryEditComponent } from './_components/categories/category-edit/category-edit.component';
import { FooterComponent } from './_components/general/footer/footer.component';
import { HeaderComponent } from './_components/general/header/header.component';
import { SignInComponent } from './_components/general/sign-in/sign-in.component';
import { SignUpComponent } from './_components/general/sign-up/sign-up.component';
import { SignUpRoleComponent } from './_components/general/sign-up-role/sign-up-role.component';
import { HomeComponent } from './_components/general/home/home.component';
import { ProductsListComponent } from './_components/products/products-list/products-list.component';
import { CategoryAddComponent } from './_components/categories/category-add/category-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesListComponent,
    CategoryViewComponent,
    CategoryEditComponent,
    FooterComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    SignUpRoleComponent,
    HomeComponent,
    ProductsListComponent,
    CategoryAddComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
