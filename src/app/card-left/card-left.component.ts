import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'card-left',
  templateUrl: './card-left.component.html',
  styleUrls: ['./sass/card-left.component.scss']
})
export class CardLeftComponent implements OnInit {
  @Input() imgLeft  = '';
  @Input() textLeft = '';

  constructor() { }

  ngOnInit(): void {
  }

}
