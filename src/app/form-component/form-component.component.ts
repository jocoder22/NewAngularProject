import { AbstractControlDirective, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group ({
      Age: ['', [Validators.required, Validators.pattern('(4[5-9]|5[0-5])')]],
      Gender: ['', [Validators.required, Validators.pattern('(Male|Female)')]],
      Race: '',
      Occupation: '',
      MaritalStatus: ['', [Validators.required, Validators.pattern('(Single|Married|Divorced|Separated)')]],
      Religion: '',
      TelephoneHome: ['', [this.HomePhoneValidator, Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      EyeColor: '',
      TelephoneWork: ['', [ Validators.required, Validators.pattern('917-[0-9]{3}-[0-9]{4}')]],
      NextKin: ''
    });
  }

  HomePhoneValidator (control: AbstractControl): ValidationErrors{
    if (control.value.startsWith('212')) {
      return null;
    } else {
      return {'Home Telephone must start with 212' : ''};
    }
  }

  logForm(value: any) {
    console.log(value);
  }

}

