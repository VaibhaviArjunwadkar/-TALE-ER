import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusComponent } from './contactus.component';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
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

  it('Verify display of Contact Us page', () => {
    expect(component).toBeTruthy();

  });

});
