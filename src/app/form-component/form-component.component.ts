import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group ({
      Age: [' ', Validators.required],
      Gender:  ' ',
      Race:  ' ',
      Occupation:  ' ',
      MaritalStatus:  ' ',
      Religion:  ' ',
      TelephoneHome:  ' ',
      EyeColor:  ' ',
      TelephoneWork:  ' ',
      NextKin: ' '
    });
  }

  logForm(value) {
    console.log(value);
  }

  ngOnInit() {
  }

}
