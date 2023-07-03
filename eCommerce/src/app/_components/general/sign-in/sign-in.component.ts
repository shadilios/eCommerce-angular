import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto } from 'src/app/_models/auth/loginDto.model';
import { LoginResponse } from 'src/app/_models/auth/loginResponse.model.ts';
import { AuthService } from 'src/app/_services/auth.service';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { UserRolesService } from 'src/app/_services/user-roles.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private auth: AuthService, private storage: LocalStorageService, private rolesService : UserRolesService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

  }

  onSignIn() {
    this.auth.login(this.signinForm.value as LoginDto).subscribe({
      next: (value) => {
        var loginResponse = value as LoginResponse;
        var token = loginResponse.token;
        if (token != null && token.length >= 10) {
          this.storage.saveData("token", token);
          this.storage.saveData("user", loginResponse);
          this.auth.loggedInStatus(true);
          this.rolesService.loggedIn(loginResponse);
        }
      },
      complete: () => {
        this.resetForm();
        let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
        this.router.navigateByUrl(returnUrl || "");
      },
      error: (error) => {
        this.auth.loggedInStatus(false);
      }
    });
  }

  resetForm(){
    this.signinForm.reset();
  }

}
