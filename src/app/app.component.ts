import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  beverages: string[];

  constructor() {
  }

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
  }

  changeBeverage(beverage: string) {
    // Change today's beverage in child component
  }
}
