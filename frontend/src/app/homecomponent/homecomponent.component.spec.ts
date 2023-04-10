import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HomecomponentComponent } from './homecomponent.component';

describe('HomecomponentComponent', () => {
  let component: HomecomponentComponent;
  let fixture: ComponentFixture<HomecomponentComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomecomponentComponent ],
      imports: [HttpClientTestingModule ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
