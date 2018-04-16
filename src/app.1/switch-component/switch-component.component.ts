import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-component',
  templateUrl: './switch-component.component.html',
  styleUrls: ['./switch-component.component.css']
})
export class SwitchComponentComponent implements OnInit {

  page = null;

  constructor() { }

  ngOnInit() {
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
