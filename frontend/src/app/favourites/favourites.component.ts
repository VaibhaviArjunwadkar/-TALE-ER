import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  storyData: any;
  favdata: any;
  imageUrl: any;
  nofav: boolean = true;
  postdata: any;
  bodydata: any;

  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
    this.nofav = true;


    this.http.get<any>('http://localhost:8080/storydb/favoritelist').subscribe(data => {
      this.storyData = data;
      if (this.storyData.length > 0) {
        this.nofav = false;
      }
    })
  }

  removefromfav(data: any) {
    this.bodydata = { storyid: data.storyid }
    this.http.post("http://localhost:8080/storydb/deletefav", this.bodydata).subscribe((apidata) => {
      console.log("post ", apidata);
      this.postdata = apidata;
      if (this.postdata.status == 200) {
        this.ngOnInit()
      }
      else {
        this.ngOnInit()
      }
    });
  }

}

