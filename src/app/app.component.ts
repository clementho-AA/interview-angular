import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentBeverage = 'coffee';
  beverages: string[];

  constructor(private service: AppService) {
    this.service.getBeverageList().subscribe(item => this.beverages = item);
  }

  addBeverage(newBeverage: string) {
    this.beverages.push(newBeverage);
  }

  changeBeverage(beverage: string) {
    this.currentBeverage = beverage;
  }
}
