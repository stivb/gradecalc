import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  creditScores:creditScore[];
  i:number;
  twoDigitString:string;
  twoDigitValue:number;
  value:number;;
  cumulativeValue:number;
  cumulativeCredits:number;
  total:number;;
  studentTotal:string;
  
  reset()
  {
  this.creditScores = new Array();
  this.twoDigitString = '00';
  this.twoDigitValue = parseInt(this.twoDigitString)
  this.value=0;
  this.cumulativeValue=0;
  this.cumulativeCredits=0.0;
  this.total = 0;
  this.studentTotal='';
  }

  constructor() {
    this.reset();
    
  }

  btnCaps = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '@15','@30']
  ];
  


 
  
  onButtonPress(symbol) {
    
    var nc:number;
    var modTotal:number;
    if (symbol=='@15'||symbol=='@30') 
    {
      nc = symbol.substring(1)*1;
      this.creditScores.push(new creditScore(nc,this.value));
      this.twoDigitString = '00';
      this.calculateTotal();

    }
    else 
    {
      this.twoDigitString = this.twoDigitString.charAt(1) + symbol;    
      this.value = parseInt(this.twoDigitString);
    }
    
  }


  calculateTotal()
  {
    var summation:string = "";
    var cumulativeValue=0;
    var cumulativeCredits=0;
    for (let cs of this.creditScores)
    {
        summation+=cs.toString();
        cumulativeCredits+=cs.numCredits;
        cumulativeValue+=cs.total;
    }
    this.studentTotal=summation;
    this.cumulativeCredits = cumulativeCredits;
    console.log(this.cumulativeCredits.toFixed(2));
    if (cumulativeCredits!=0) this.cumulativeValue=cumulativeValue/cumulativeCredits;
  }

}

class creditScore {
  numCredits=15;
  score=0;
  total=0;

  constructor(nc,s) {
    this.score=s;
    this.numCredits=nc;
    this.total=this.numCredits*this.score;
  }
  setScore(s: number) 
  {
    this.score=s;
    this.total=this.numCredits*this.score;
  }
  setCredits(nc: number) 
  {
    this.numCredits=nc;
    this.total=this.numCredits*this.score;
  }

  toString()
  {
    return "" + this.numCredits + "*" +this.score + "=" + this.total + "\n";
  }
}
