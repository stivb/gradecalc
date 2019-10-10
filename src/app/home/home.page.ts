import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  twoDigitString = '00'
  twoDigitValue = parseInt(this.twoDigitString)
  value=0;
  total = 0;
  constructor() {}
  btnCaps = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '@15','@30']
  ];

  onButtonPress(symbol) {
    if (symbol=='@15'||symbol=='@30') this.twoDigitString = '00';
    else this.twoDigitString = this.twoDigitString.charAt(1) + symbol;    
    this.value = parseInt(this.twoDigitString);

  }

}
