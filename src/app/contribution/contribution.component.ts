import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent {
contribution=new FormGroup({
  fullName:new FormControl(''),
  phoneNumber:new FormControl(''),
  email:new FormControl(''),
  amount:new FormControl('')
})
}
