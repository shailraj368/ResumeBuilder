import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]],
      role: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const userData = this.registrationForm.value;
      this.service.registerUser(userData).subscribe({
        next: (res) => {
          // Handle success
          this.router.navigate(['WorkHistory/list']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }

  passwordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasLetter = /[a-zA-Z]/.test(value);
    const hasSpecialChar = /[^a-zA-Z0-9]/.test(value);
    const valid = hasNumber && hasLetter && hasSpecialChar && value.length >= 6;

    if (!valid) {
      return { invalidPassword: true };
    }

    return null;
  }
}
