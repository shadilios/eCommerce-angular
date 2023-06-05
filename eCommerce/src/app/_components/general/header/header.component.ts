import { Component, OnInit } from '@angular/core';
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

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    console.log(this.isLoggedIn);

    this.auth.loggedIn$.subscribe((loggedIn)=> {
      this.isLoggedIn = loggedIn;
    });
  }

  public signOutClicked(){
    console.log("ASKL:DHQAIOLWHD");
    this.auth.logout();
  }

}
