import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {

  displayValue : string = '0';
  prevNumber : number | null = null;
  operatorPressed : boolean = true;
  operator : string = '';

  public Evaluate(operator: string, secondNumber: number) {
    if (this.prevNumber === null) {
      return secondNumber;
    } 
    else if (operator === "+") return this.prevNumber + secondNumber;
    else if (operator === "-") return this.prevNumber - secondNumber;
    else if (operator === "*") return this.prevNumber * secondNumber;
    else if (operator === "/") return this.prevNumber / secondNumber;
    else if (operator === "=") return secondNumber;
    else return secondNumber;
  }

  public InputNumber (input: string) {
    if (this.operatorPressed) {
      this.displayValue = input;
      this.operatorPressed = false;
    } else {
      this.displayValue += input;
    }
  }

  public InputOperator(input: string) {
    if (this.prevNumber && this.operator != '') {
      let answer = this.Evaluate(this.operator, Number(this.displayValue));
      this.prevNumber = answer;
      this.displayValue = String(answer);
      this.operator === "=" ? this.operatorPressed = true : this.operatorPressed = false;
    } else if (this.prevNumber == null) {
      this.prevNumber = Number(this.displayValue);
      this.operatorPressed = true;
    }
    this.operator = input;
  }

  public Clear() {
    this.displayValue = '0';
    this.prevNumber = null;
    this.operatorPressed = true;
    this.operator = '';
  }


}
