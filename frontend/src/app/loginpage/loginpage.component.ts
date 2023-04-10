import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent {
  emailid: any;
  formdata: any;
  showMsg: boolean = false;

  constructor(private http: HttpClient, private _router: Router) { }

  loginData: any;

  ngOnInit() {
    this.showMsg = false;
    this.formdata = new FormGroup({
      emailid: new FormControl(""),
      password: new FormControl("")
    });


  }

  onSubmit(data: any) {

    console.log(data)
    this.formdata = data;
    console.log(this.formdata);
    // Simple GET request to get all the login information
    this.http.get<any>('http://localhost:8080/storydb/loginlist').subscribe(data => {
      this.loginData = data;
      console.log(this.loginData);

      for (let i = 0; i < data.length; i++) {
        if (this.loginData[i].emailid == this.formdata.emailid) {
          if (this.loginData[i].password == this.formdata.password) {
            this._router.navigateByUrl('/home')
          }
          else {
            console.log("password is incorrect")
            this.showMsg = true;
          }
        } else {
          console.log("email does not exists")
          this.showMsg = true;
        }
      }
    })

  }



}


