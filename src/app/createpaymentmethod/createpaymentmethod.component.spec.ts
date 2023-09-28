import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepaymentmethodComponent } from './createpaymentmethod.component';

describe('CreatepaymentmethodComponent', () => {
  let component: CreatepaymentmethodComponent;
  let fixture: ComponentFixture<CreatepaymentmethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatepaymentmethodComponent]
    });
    fixture = TestBed.createComponent(CreatepaymentmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
