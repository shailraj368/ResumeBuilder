import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WorkHistoryService {
  constructor(private http: HttpClient) {}

  url: string = environment.apiBaseUrl + '/WorkHistory';

  refreshList() {
    return this.http.get(this.url);
  }

  saveWorkHistory(data: any) {
    return this.http.post(this.url, data);
  }

  getWorkHistory(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  updateWorkHistory(id: any, data: any) {
    return this.http.put(this.url + '/' + id, data);
  }

  deleteWorkHistory(id: any) {
    return this.http.delete(this.url + '/' + id);
  }
}
