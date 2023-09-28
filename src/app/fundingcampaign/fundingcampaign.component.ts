import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-fundingcampaign',
  templateUrl: './fundingcampaign.component.html',
  styleUrls: ['./fundingcampaign.component.css']
})
export class FundingcampaignComponent {
  foods: Food[] = [
    {value: 'M-pesa-0', viewValue: 'Mpesa'},
    {value: 'Direct-1', viewValue: 'Direct'},
    {value: 'Otherform', viewValue: 'Other form'},
  ];
}
