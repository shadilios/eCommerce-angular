import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { AuthService } from 'src/app/_services/auth.service';

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
        icon:PrimeIcons.MICROSOFT,
        routerLink:'categories'

    },
    {
        label: 'Products',
        icon: PrimeIcons.BOX,
        routerLink: 'products'

    }
];
  isLoggedIn = false;

  constructor(private auth : AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.loggedIn$.subscribe((loggedIn)=> {
      this.isLoggedIn = loggedIn;
      if (!loggedIn) {
        this.router.navigateByUrl("sign-in");
      }
    });
  }

  public signOutClicked(){
    console.log("ASKL:DHQAIOLWHD");
    this.auth.logout();
    this.router.navigateByUrl("");
  }

}
