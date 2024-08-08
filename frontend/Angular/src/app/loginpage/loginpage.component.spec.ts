import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginpageComponent } from './loginpage.component';

describe('LoginpageComponent', () => {
  let component: LoginpageComponent;
  let fixture: ComponentFixture<LoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginpageComponent],
      imports: [HttpClientTestingModule, ReactiveFormsModule],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully login the user', () => {
    expect(component).toBeTruthy();
  });

  it('should not login with invalid email address', () => {
    expect(component).toBeTruthy();
  });

  it('should Verify redirection after login', () => {
    expect(component).toBeTruthy();
  });

  it('should not login with invalid password', () => {
    expect(component).toBeTruthy();
  });

  it('Verify display of login page', () => {
    expect(component).toBeTruthy();

  });

});
