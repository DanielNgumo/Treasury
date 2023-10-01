import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PledgeregistrationComponent } from './pledgeregistration.component';

describe('PledgeregistrationComponent', () => {
  let component: PledgeregistrationComponent;
  let fixture: ComponentFixture<PledgeregistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PledgeregistrationComponent]
    });
    fixture = TestBed.createComponent(PledgeregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
