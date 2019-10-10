import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value='0';
  total = 0;
  constructor() {}
  btnCaps = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '@15','@30']
  ];

  onButtonPress(symbol) {
    console.log(symbol);
    this.value=symbol;
  }

}
