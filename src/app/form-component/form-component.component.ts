import { FormBuilder, Validators, FormGroup } from '@angular/forms';
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
      TelephoneHome: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
      EyeColor: '',
      TelephoneWork: ['', [Validators.required, Validators.pattern('([0-9]{3}-){2}[0-9]{4}')]],
      NextKin: ''
    });
  }


  // ngOnInit() {
  //   this.registerForm = this.formBuilder.group ({
  //     Age: ['', [Validators.required, Validators.pattern('(4[5-9]|5[0-5])')]],
  //     Gender: ['', [Validators.required, Validators.pattern('(Male|Female)')]],
  //     Race: '',
  //     Occupation: '',
  //     MaritalStatus: ['', [Validators.required, Validators.pattern('(Single|Married|Divorced|Separated)')]],
  //     Religion: '',
  //     TelephoneHome: ['', [Validators.required, Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')]],
  //     EyeColor: '',
  //     TelephoneWork: ['', [Validators.required, Validators.pattern('([0-9]{3}-){2}[0-9]{4}')]],
  //     NextKin: ''
  //   });
  // }

  logForm(value: any) {
    console.log(value);
  }

}

