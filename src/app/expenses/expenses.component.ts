import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent {
expenses= new FormGroup({
  amount:new FormControl(''),
  purpose:new FormControl(''),
  details:new FormControl(''),
  witness:new FormControl('')
})
}
