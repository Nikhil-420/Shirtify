import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-adress-form',
  templateUrl: './adress-form.component.html',
  styleUrls: ['./adress-form.component.css']
})
export class AdressFormComponent implements OnInit {

  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      addressLine1 : [''],
      addressLine2 : [''],
      city : [''],
      state : [''],
      pincode : [''],
      country : [''],
      landMark : [''],
      telephone : ['']
    })
  }

}
