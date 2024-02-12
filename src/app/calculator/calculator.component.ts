import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  display1: string = '';
  firstNumber: any;
  secondNumber: any;
  a: any;
  b: any;
  action: any;
  result: any;
  number: any;
  displayOutput: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getNumber(value: string) {
    debugger
    this.display1 += value;
    console.log(this.display1);
  }

  calculate() {
    debugger
    this.displayOutput = eval(this.display1);
    console.log(this.displayOutput);
  }



  clear(data: any) {
    if (data == 'c') {
      this.displayOutput = 0
      this.display1 = ''
    }
  }

  clearEntry() {
    this.display1 = this.display1.slice(0, -1);
    this.displayOutput = 0
  }

}
