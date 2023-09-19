import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import form-related modules
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private service: UserAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]], 
      password: ['', [Validators.required, Validators.minLength(6)]], 
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.service.loginUser(user).subscribe({
      next: (res: any) => {
        console.log(res, 'Login Res ...');
        localStorage.setItem('token', res.results.token);
        this.router.navigate(['WorkHistory/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(user, 'Login.....');
  }
}


// // getProfile(){

// //   let headers = {
// //     'Authorization' : "Bearer " + localStorage.getItem('token')
// //   }

// //   return this.http.get(this.url,{headers:headers})
// // }
