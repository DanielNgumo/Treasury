import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingcampaignComponent } from './fundingcampaign.component';

describe('FundingcampaignComponent', () => {
  let component: FundingcampaignComponent;
  let fixture: ComponentFixture<FundingcampaignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FundingcampaignComponent]
    });
    fixture = TestBed.createComponent(FundingcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
