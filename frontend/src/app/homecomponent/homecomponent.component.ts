import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss']
})
export class HomecomponentComponent {
  storyData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Simple GET request to get all the login information
    this.http.get<any>('http://localhost:8080/storydb/storylist').subscribe(data => {
      this.storyData = data;
    })
  }

}
