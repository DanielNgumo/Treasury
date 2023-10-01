import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pledgeregistration',
  templateUrl: './pledgeregistration.component.html',
  styleUrls: ['./pledgeregistration.component.css']
})
export class PledgeregistrationComponent {
pledge= new FormGroup({
  fullName:new FormControl(''),
  phoneNumber:new FormControl(''),
  email:new FormControl(''),
  amount:new FormControl('')
})
}
