import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Product } from 'src/app/_models/product/product.model';
import { ProductsService } from 'src/app/_services/products.service';
import { UserRolesService } from 'src/app/_services/user-roles.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products?: Product[];

  categoryId?: any;

  productToBeDeleted?: Product;


  isAdmin = false;
  isEditor = false;
  isUser = false;

  roles = [""];

  showChildDialog: boolean = false;

  constructor(private productsService: ProductsService, private rolesService: UserRolesService, private route: ActivatedRoute) { }




  ngOnInit(): void {
    this.getProducts();
    this.getRoles();
  }

  //#region Receivers

  /**Recieves delete emit from product child */
  onDeleteReceiver(product: Product) {
    this.productToBeDeleted = product;
    this.switchDialogVisibilty();
  }

  /**Recieves accept/reject from dialog child */
  responseReceiver(data: any) {
    if (data) {
      this.proceedWithDelete();
    } else {
      this.switchDialogVisibilty();
    }
  }

  //#endregion


  /**
   * Shows/Hide dialog
   */
  switchDialogVisibilty() {
    console.log("switchDialogVisibilty");

    this.showChildDialog = !this.showChildDialog;
  }

  /**
   * Deletes the selected product
   */
  proceedWithDelete() {
    this.productsService.deleteProduct(this.productToBeDeleted?.id).subscribe({
      complete: () => {
        this.ngOnInit();
        this.switchDialogVisibilty();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }





  /**
   * Gets products either by category id or all of them
   */
  getProducts() {
    this.categoryId = this.route.snapshot.params['categoryId'];
    if (this.categoryId != null) {
      this.getProductsByCategory(this.categoryId);
    }
    else {
      this.getAllProducts();
    }
  }


  /**
   * Get all products
   */
  getAllProducts() {
    this.productsService.getProducts().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }


  /**
   * Gets products in a specific category
   * @param categoryId
   */
  getProductsByCategory(categoryId: any) {
    this.productsService.getProductsByCategory(categoryId).subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  /**
   * Gets current user roles
   */
  getRoles() {
    this.rolesService.loggedRoles$.subscribe(
      (roles) => {
        this.roles = roles;
        this.setConditions(this.roles);
      }
    );
  }

  /**
   * Sets the component conditions based on roles array
   * @param roles string[]
   */
  setConditions(roles: string[]) {
    if (roles.includes("Admin"))
      this.isAdmin = true;
    if (roles.includes("Editor"))
      this.isEditor = true;
    if (roles.includes("User"))
      this.isUser = true;
  }


}
