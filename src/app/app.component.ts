import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My New Angular App!';
  name = 'Joshua';
  page = null;

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

  alertName(): void {
    alert(`${this.name} was clicked`);
  }

  displayPerson(person) {
    const fullname = `${person.firstname} ${person.lastname}`;
    return `${fullname} works for ${person.company}`;
  }

  getphone(person) {
    const fullname = `${person.firstname} ${person.lastname}`;
    return `${fullname}: ${person.phone}`;
  }

  changePage1() {
    if (this.page === 0) {
      return this.page = 2;
    }
    if (this.page < 6) {
      return this.page += 1;
    } else {
      return this.page = 6;
    }
  }

  changePage() {
    if (this.page === 6) {
      return this.page = 4;
    }
    if (this.page > 1) {
      return this.page -= 1;
    } else {
      return this.page = 0;
    }
  }
}
