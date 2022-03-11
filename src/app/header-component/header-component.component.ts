import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./sass/header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  nameCompany = 'Uber2';
  year = '2021';

  constructor() { }

  ngOnInit(): void {
  }

}
