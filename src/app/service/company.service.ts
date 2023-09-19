import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiBaseUrl + '/Company';

  companyList() {
    return this.http.get(this.url);
  }
  
  
  getCompany(id:any) {
    return this.http.get(this.url + '/' + id);
  }
}
