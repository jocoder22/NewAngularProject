import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcomponent',
  templateUrl: './listcomponent.component.html',
  styleUrls: ['./listcomponent.component.css']
})
export class ListcomponentComponent implements OnInit {

  public persons = [
    {
      'firstname': 'Joshua',
      'lastname': 'Emanaul',
      'company': 'NewAge Computer Inc.',
      'phone': '212-567-893'
    },
    {
      'firstname': 'Mark',
      'lastname': 'Goodwill',
      'company': 'FedEx Inc.',
      'phone': '212-567-893'
    },
    {
      'firstname': 'Paul',
      'lastname': 'Elizabeth',
      'company': 'ComputerRE Ent.',
      'phone': '212-567-893'
    },
    {
      'firstname': 'Mary',
      'lastname': 'Oliva',
      'company': 'Advanced Diagnostics',
      'phone': '212-567-893'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  displayPerson(person) {
    const fullname = `${person.firstname} ${person.lastname}`;
    return `${fullname} works for ${person.company}`;
  }

  getphone(person) {
    const fullname = `${person.firstname} ${person.lastname}`;
    return `${fullname}: ${person.phone}`;
  }

}
