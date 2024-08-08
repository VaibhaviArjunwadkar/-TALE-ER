import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  receivedValue: number | null = null;

  onValueChanged(newValue: number) {
    this.receivedValue = newValue;
  }

  inputData: FormGroup;
  target: any;
  display: any;
  name: string = ''; 

  data = [0,1,2,3,4,5,6,7,8,9,10];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.inputData = this.fb.group({
      target: ['', Validators.required],
    });
  }

  searchElement(){
    this.display = 0;
    console.log(this.data)
    this.target = this.inputData.value.target;
    
    let start = 0;
    let end = this.data.length;
    let mid = 0;

    while(start<=end){
      mid = Math.floor((start+end)/2);

      if(this.data[mid]==this.target){
        this.display = mid+1;
        return;
      }else if(this.data[mid]<this.target){
        start = mid+1
      }else{
        end = mid-1
      }
    }
    this.display = -1;
  }

}
