import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  getLoginList(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/storydb/loginlist`);
  }

  getStories(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/storydb/storylist');
  }
}
