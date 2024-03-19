import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
/** FOR MODALS TO WORK */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DialogModule } from "primeng/dialog";
/** */

import {CardModule} from 'primeng/card';


import { MenuItem } from 'primeng/api';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { TokenInterceptor } from './_interceptors/token.interceptor';
import { MyLinkComponent } from './_components/my-link/my-link.component';
import { NotFoundComponent } from './_components/general/not-found/not-found.component';
import { UnauthorizedComponent } from './_components/general/unauthorized/unauthorized.component';
import { ProductAddComponent } from './_components/products/product-add/product-add.component';
import { ProductEditComponent } from './_components/products/product-edit/product-edit.component';
import { ProductViewComponent } from './_components/products/product-view/product-view.component';
import { ProductComponent } from './_components/products/product/product.component';
import { ConfirmDialogComponent } from './_components/general/confirm-dialog/confirm-dialog.component';
import { SignInTwitterComponent } from './_components/general/sign-in-twitter/sign-in-twitter.component';

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
    CategoryAddComponent,
    MyLinkComponent,
    NotFoundComponent,
    UnauthorizedComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductViewComponent,
    ProductComponent,
    ConfirmDialogComponent,
    SignInTwitterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    CardModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
