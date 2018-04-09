import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Angular App!';
  name = 'Joshua';

  public persons = [
    {
      'name': 'Joshua Emanaul',
      'company': 'NewAge Computer Inc.'
    },
    {
      'name': 'Mark Goodwill',
      'company': 'FedEx Inc.'
    },
    {
      'name': 'Paul Elizabeth',
      'company': 'ComputerRE Ent.'
    },
    {
      'name': 'Mary Oliva',
      'company': 'Advanced Diagnostics'
    }
  ];

  alertName(): void {
    alert(`${this.name} was clicked`);
  }

  displayPerson(persons) {
    return `${persons.name} works for ${persons.company}`;
  }
}
