import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginDto } from 'src/app/_models/loginDto.model';
import { AuthService } from 'src/app/_services/auth.service';

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
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSignIn() {
    this.auth.login(this.signinForm.value as LoginDto);
  }

}
