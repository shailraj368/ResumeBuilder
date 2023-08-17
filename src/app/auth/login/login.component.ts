import { Component } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private service: UserAuthService, private router: Router) {}

  user = {
    userName: '',
    password: '',
  };

  onSubmit() {
    this.service.loginUser(this.user).subscribe({
      next: (res : any) => {
        // this.service.refreshList();
        // window.location.reload();
        console.log(res,"Login Res ...")
        localStorage.setItem('token',res.results.token)
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.user, 'Login.....');
    this.router.navigate(['WorkHistory/list']);
  }
}


// getProfile(){

//   let headers = {
//     'Authorization' : "Bearer " + localStorage.getItem('token')
//   }

//   return this.http.get(this.url,{headers:headers})
// }