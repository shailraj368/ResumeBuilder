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

  isLoggedIn() {
    const token: any = localStorage.getItem('token'); // get token from local storage

    const payload = atob(token.split('.')[1]); // decode payload of token

    const parsedPayload = JSON.parse(payload); // convert payload into an Object

    return parsedPayload.exp > Date.now() / 1000; // check if token is expired
  }
}
