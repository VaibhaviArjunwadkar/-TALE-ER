import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FavouritesComponent } from './favourites.component';

describe('FavouritesComponent', () => {
  let component: FavouritesComponent;
  let fixture: ComponentFixture<FavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouritesComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to home page after clicking on home button on nav bar', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to home page after clicking on My favorites button on nav bar', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to home page after clicking on About button on nav bar', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to home page after clicking on Contact Us button on nav bar', () => {
    expect(component).toBeTruthy();
  });

  it('should show all the favourite stories for the user', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to story page after clicking on favourite button', () => {
    expect(component).toBeTruthy();

  });

  it('Verify display of favorites list', () => {
    expect(component).toBeTruthy();

  });

});
