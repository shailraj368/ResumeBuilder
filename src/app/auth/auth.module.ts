import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, ProfileComponent, VerifyOtpComponent],
  imports: [CommonModule, FormsModule,AuthRoutingModule,ReactiveFormsModule],
})
export class AuthModule {}
