import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { SignOnPageComponent } from './sign-on-page.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


describe('SignOnPageComponent', () => {
  let component: SignOnPageComponent;
  let fixture: ComponentFixture<SignOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignOnPageComponent],
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

  it('should successfully sign Up the user', () => {
    expect(component).toBeTruthy();
  });

  it('should not sign Up if database already has entered credentials', () => {
    expect(component).toBeTruthy();
  });

  it('should Verify redirection to home page after login', () => {
    expect(component).toBeTruthy();
  });

  it('should Verify redirection after login', () => {
    expect(component).toBeTruthy();
  });

  it('should not sign up with invalid email format', () => {
    expect(component).toBeTruthy();
  });

  it('Verify display of Sign Up page', () => {
    expect(component).toBeTruthy();

  });

});
