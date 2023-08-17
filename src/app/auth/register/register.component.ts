import { Component } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private service: UserAuthService, private router: Router) {}

  user = {
    name: '',
    userName: '',
    password: '',
    role: '',
  };

  onSubmit() {
    this.service.registerUser(this.user).subscribe({
      next: (res) => {
        // this.service.refreshList();
        // window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });

    console.log(this.user, 'Register.....');
    this.router.navigate(['WorkHistory/list']);
  }
}
