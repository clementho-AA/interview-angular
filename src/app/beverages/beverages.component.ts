import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {

  @Input() currentBeverage: string;
  @Output() newBeverageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.currentBeverage = 'tea';
  }

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value);
  }

}
