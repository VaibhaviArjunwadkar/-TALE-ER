import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  storyData: any;
  favdata: any;
  imageUrl: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  this.favdata = [];
   // Simple GET request to get all the login information
   this.http.get<any>('http://localhost:8080/storydb/storylist').subscribe(data => {
    this.storyData = data;
   for(let i=0; i<this.storyData.length; i++){
    if(this.storyData[i].favourite == true){
      this.favdata.push(this.storyData[i])
    }
   }
   console.log(this.favdata);
  })
  }
}
