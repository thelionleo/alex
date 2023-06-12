import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {



  lava: number = 0;  // holds the current operand
  storedValue: number = 0;  // holds the stored operand for calculations
  currentOperation: string = '';  // holds the current operation
  

constructor(){

}

ngOnInit(): void {
  
}
buttonClick(numberselected: number): void {
  this.lava = this.lava * 10 + numberselected;
}




clearInput(): void {
  this.lava = 0;
}

setOperation(operation: string): void {
  if (this.currentOperation !== '') {
      this.equals();
  }
  this.currentOperation = operation;
  this.storedValue = this.lava;
  this.lava = 0; // Reset the current number after storing it
}


equals(): void {
  switch (this.currentOperation) {
    case '+':
        this.lava = this.storedValue + this.lava;
        break;
    case '-':
        this.lava = this.storedValue - this.lava;
        break;
    case '*':
        this.lava = this.storedValue * this.lava;
        break;
    case '/':
        if (this.lava !== 0) {
            this.lava = this.storedValue / this.lava;
        } else {
            // handle division by zero error
            console.error('Cannot divide by zero');
        }
        break;
    default:
        // handle no operation or unknown operation
        break;
  }
  this.currentOperation = '';
  this.storedValue = 0; // After operation, storedValue should be reset.
}



}
