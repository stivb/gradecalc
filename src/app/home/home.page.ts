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
    [0, 50,'Clear'],
    ['@15','@30','@60']
  ];
  

  onDeleteRequest(ct)
  {
    this.creditScores.splice(ct,1);
    this.calculateTotal();
  }
 
  
  onButtonPress(symbol) {
    
    var nc:number;
    var modTotal:number;
    if (symbol=='@15'||symbol=='@30'||symbol=='@60') 
    {
      nc = symbol.substring(1)*1;
      this.creditScores.push(new creditScore(this, nc,this.value));
      this.twoDigitString = '00';
      this.calculateTotal();

    }
    else if (symbol==50)
	{
		this.value = 50;
	}
	else
    {
      this.twoDigitString = this.twoDigitString.charAt(1) + symbol;    
      this.value = parseInt(this.twoDigitString);
    }
    
  }


  calculateTotal()
  {
    console.log("doing calculation");
    var summation:string = "";
    var cumulativeValue=0;
    var cumulativeCredits=0;
    for (let cs of this.creditScores)
    {
        summation+=cs.toString();
        cumulativeCredits+=cs.numCredits;
        cumulativeValue+=cs.total;
        console.log("Total is " + cs.total)
    }
    this.studentTotal=summation;
    this.cumulativeCredits = cumulativeCredits;
    console.log(this.cumulativeCredits.toFixed(2));
    if (cumulativeCredits!=0) 
	{
		var v=cumulativeValue/cumulativeCredits;
		this.cumulativeValue=parseInt(v.toFixed(2));
	}
  }

}


 class creditScore {
  numCredits=15;
  score=0;
  total=0;
  isCapped=false;
  prent = null;

  constructor(prent, nc,s) {
    this.prent = prent;
    this.score=s;
    this.numCredits=nc;
    var mytotal = this.numCredits*this.score;
    this.total= mytotal;
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

  onIsCappedChange() {
    this.total = this.getTotal();
    this.prent.calculateTotal();
  }

  getTotal()
  {
    var mytotal = this.numCredits*this.score;
    if (this.isCapped==true) mytotal = Math.min(mytotal,this.numCredits*50);
    return mytotal;
  }

  toString()
  {
    return "" + this.numCredits + "*" +this.score + "=" + this.getTotal() + "\n";
  }
}
