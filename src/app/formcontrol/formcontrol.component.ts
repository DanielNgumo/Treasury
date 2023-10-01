import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent {
  paymentMethod = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });
}
