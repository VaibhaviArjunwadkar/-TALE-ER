import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-on-page',
  templateUrl: './sign-on-page.component.html',
  styleUrls: ['./sign-on-page.component.scss']
})
export class SignOnPageComponent implements OnInit {
  emailid: any;
  formdata: any;
  postdata: any;
  loginData: any;
  showMsg: boolean = false;
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
    this.showMsg = false;
    this.formdata = new FormGroup({
      emailid: new FormControl(""),
      password: new FormControl("")
    });
  }

  onSubmit(data: any) {
  

    this.formdata = data;
    // Simple GET request to get all the login information
    this.http.get<any>('http://localhost:8080/storydb/loginlist').subscribe(data => {
      this.loginData = data;
      console.log(this.loginData);

      for (let i = 0; i < data.length; i++) {
        if (this.loginData[i].emailid == this.formdata.emailid) {
          this.showMsg = true;
          console.log("email already exists..!")
        }
      }
      if (this.showMsg == false) {
        this.http.post("http://localhost:8080/storydb/logininfo/register", this.formdata).subscribe((apidata) => {
          console.log("post ", apidata);
          this.postdata = apidata;
          if (this.postdata.status == 200) {
            this._router.navigateByUrl('/home')
          }
          else {
            this.ngOnInit()
          }
        });
      }
    })



  }

}
