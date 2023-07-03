import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/_services/auth.service';
import { UserRolesService } from 'src/app/_services/user-roles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: "Home",
      icon: PrimeIcons.HOME,
      routerLink: '/'

    },
    {
      label: 'Categories',
      icon: PrimeIcons.MICROSOFT,
      routerLink: 'categories'

    },
    {
      label: 'Products',
      icon: PrimeIcons.BOX,
      routerLink: 'products'

    }
  ];
  isLoggedIn = false;

  isAdmin = false;
  isEditor = false;
  isUser = false;

  roles = [""];

  constructor(private auth: AuthService, private router: Router, private rolesService: UserRolesService) { }

  ngOnInit(): void {
    this.getLoggedIn();
    this.getRoles();
  }

  getLoggedIn() {
    this.auth.loggedIn$.subscribe(
      (loggedIn) => {
        this.isLoggedIn = loggedIn;
        this.isUser = true;
        if (!loggedIn) {
          this.router.navigateByUrl("sign-in");
        }
      });
  }

  getRoles() {
    this.resetConditions();
    this.rolesService.loggedRoles$.subscribe(
      (roles) => {
        this.roles = roles;
        this.setConditions(this.roles);
      }
    );
  }

  public signOutClicked() {
    this.auth.logout();
    this.rolesService.loggedOut();
    this.router.navigateByUrl("");
  }

  setConditions(roles: string[]) {
    if (roles.includes("Admin"))
      this.isAdmin = true;
    if (roles.includes("Editor"))
      this.isEditor = true;
    if (roles.includes("User"))
      this.isUser = true;
    else
      this.resetConditions();
  }

  resetConditions() {
    this.isAdmin = false;
    this.isEditor = false;
    this.isUser = false;
  }

}
