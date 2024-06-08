import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homecomponent',
  templateUrl: './homecomponent.component.html',
  styleUrls: ['./homecomponent.component.scss']
})
export class HomecomponentComponent {
  storyData: any;
  nofav: boolean = true;
  postdata: any;

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
    // Simple GET request to get all the login information
    this.http.get<any>('http://localhost:8080/storydb/storylist').subscribe(data => {
      this.storyData = data;
      if (this.storyData.length > 0) {
        this.nofav = false;
      }
    })
  }

  addtofav(data: any) {
    console.log("yahoo:", data)
    this.http.post("http://localhost:8080/storydb/addfavorite", data).subscribe((apidata) => {
      console.log("post ", apidata);
      this.postdata = apidata;
      if (this.postdata.status == 200) {
        this._router.navigateByUrl('/favourites')
      }
      else {
        this._router.navigateByUrl('/favourites')
      }
    });
  }

}
