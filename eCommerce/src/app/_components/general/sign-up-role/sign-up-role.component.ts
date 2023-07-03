import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SignUpDto } from 'src/app/_models/auth/signupDto.model';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-sign-up-role',
  templateUrl: './sign-up-role.component.html',
  styleUrls: ['./sign-up-role.component.css']
})
export class SignUpRoleComponent implements OnInit {


  signUpFor?: string;

  signUpForm = new FormGroup({
    username: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }

  onSignUp(){
    console.log(this.signUpFor);

    if (this.signUpFor == 'admin') {
      this.auth.registerAdmin(this.signUpForm.value as SignUpDto);
    }
    else if(this.signUpFor == 'editor'){
      this.auth.registerEditor(this.signUpForm.value as SignUpDto).subscribe({
        next:(value)=> {

        },
        error: (error)=>{

        },
        complete: ()=>{
          this.signUpForm.reset();
        }
      });
    }
    else{
      console.log("NO ROLE WAS SELECTED");
    }
  }
}
