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


  alertName(): void {
    alert(`${this.name} was clicked`);
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
