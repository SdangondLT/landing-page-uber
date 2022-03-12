import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./sass/card-right.component.scss']
})
export class CardRightComponent implements OnInit {
  @Input() imgRight  = '';
  @Input() textRight = '';

  constructor() { }

  ngOnInit(): void {
  }

}
