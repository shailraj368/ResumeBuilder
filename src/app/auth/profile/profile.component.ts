import { Component } from '@angular/core';
import { UserAuthService } from '../service/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  id: any = 1003;
  list: any;
  verifyFlag: any = 'Verify your mail';
  obj: any;

  constructor(private service: UserAuthService, private router: Router) {}

  ngOnInit(): void {
    this.service.profile(this.id).subscribe({
      next: (res) => {
        this.list = res;
        console.log(this.list, 'Image..........');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  sendOtp() {
    this.obj = {
      toEmail: this.list.email,
      subject: 'OTP verification.',
      body: this.list.name,
      name: this.list.name,
    };
    this.service.sendVerificationMail(this.obj).subscribe({
      next: (res) => {
        if (res) {
          this.router.navigate(['Auth/otp']);
        } else {
          console.log('error in send otp');
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
