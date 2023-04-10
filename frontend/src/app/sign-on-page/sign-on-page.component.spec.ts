import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { SignOnPageComponent } from './sign-on-page.component';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


describe('SignOnPageComponent', () => {
  let component: SignOnPageComponent;
  let fixture: ComponentFixture<SignOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignOnPageComponent ],
      imports: [HttpClientTestingModule, ReactiveFormsModule], 
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
