import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { StorypageComponent } from './storypage.component';
import { RouterModule } from '@angular/router';


describe('StorypageComponent', () => {
  let component: StorypageComponent;
  let fixture: ComponentFixture<StorypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorypageComponent ],
      imports: [ 
        HttpClientTestingModule,
        RouterModule.forRoot([])
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(StorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
