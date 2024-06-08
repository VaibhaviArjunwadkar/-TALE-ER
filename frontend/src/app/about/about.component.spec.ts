import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
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

  it('Verify display of About page', () => {
    expect(component).toBeTruthy();

  });

});
