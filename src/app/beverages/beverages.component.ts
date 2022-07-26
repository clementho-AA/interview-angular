import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent implements OnInit {

  currentBeverage = 'tea';

  constructor() { }

  ngOnInit() {
  }

  addNewBeverage(value: string) {
    // Add beverage to beverages list in parent component
  }

}
