import { Component, OnInit } from '@angular/core';
import { MyLink } from 'src/app/_models/link.model';
import { UserRolesService } from 'src/app/_services/user-roles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myLinks: MyLink[] = [
    { link: "www.google.com", isFavorite: true, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" },
    { link: "www.facebook.com", isFavorite: false, icon: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/1200px-Facebook_f_logo_%282021%29.svg.png" },

  ]
  constructor() { }

  ngOnInit(): void {

  }

  ///This will be raised from the my-link component
  onFavoriteChanged(event : any) {
    console.log("Favorite Changed" + event);
  }

}
