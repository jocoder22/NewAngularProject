import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.registerForm = this.formBuilder.group ({
      Age: ['', [Validators.required, Validators.pattern('[0-9]{1,2}')]],
      Gender: ['', [Validators.required, Validators.pattern('[MalmFe]{1,}')]],
      Race: '',
      Occupation: '',
      MaritalStatus: '',
      Religion: '',
      TelephoneHome: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      EyeColor: '',
      TelephoneWork: ['', [Validators.required, Validators.pattern('([0-9]{3}-){2}[0-9]{4}')]],
      NextKin: ''
    });
  }

  logForm(value: any) {
    console.log(value);
  }

}
