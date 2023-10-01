import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent {
newGroup=new FormGroup({
  name : new FormControl(''),
  
})
}
