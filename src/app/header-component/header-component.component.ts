import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./sass/header-component.component.scss']
})
export class HeaderComponentComponent implements OnInit {
  nameCompany = 'Uber';
  year = '2021';
  imgYear = '../../assets/img/year.PNG';

  constructor() { }

  ngOnInit(): void {
  }

}
