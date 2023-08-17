import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiBaseUrl + '/Auth';

  registerUser(data: any) {
    return this.http.post(this.url + '/register', data);
  }

  loginUser(data: any) {
    return this.http.post(this.url + '/login', data);
  }
}
