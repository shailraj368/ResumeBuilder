import { Component } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.component.html',
  styleUrls: ['./verify-otp.component.css']
})
export class VerifyOtpComponent {

  otpForm!: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private service: UserAuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.otpForm = this.formBuilder.group({
      otp: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.otpForm.valid) {
      const otpData = this.otpForm.value;
      otpData.email = ""
      this.service.verifyOtp(otpData).subscribe({
        next: (res) => {
          if (res) {
            this.router.navigate(['WorkHistory/list']);
          } else {
            console.log("errror in otp verification")
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
