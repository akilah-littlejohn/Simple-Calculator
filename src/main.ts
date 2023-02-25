import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <main class="calculator">
  <h1>Calculator</h1>

  <h1 class="display">{{ display }}</h1>

  <section class="buttons">
    <button (click)="numberClick(1)">1</button>
    <button (click)="numberClick(2)">2</button>
    <button (click)="numberClick(3)">3</button>
    <button (click)="operatorClick('+')">+</button>
    <button (click)="numberClick(4)">4</button>
    <button (click)="numberClick(5)">5</button>
    <button (click)="numberClick(6)">6</button>
    <button (click)="operatorClick('-')">-</button>
    <button (click)="numberClick(7)">7</button>
    <button (click)="numberClick(8)">8</button>
    <button (click)="numberClick(9)">9</button>
    <button (click)="operatorClick('*')">*</button>
    <button (click)="numberClick(0)">0</button>
    <button (click)="operatorClick('/')">/</button>
    <button (click)="clear()">C</button>
    <button (click)="calculate()">=</button>
</section>
</main>
  `,
})
export class App {
  display = '';

  numberClick(num: number) {
    this.display += num.toString();
  }

  operatorClick(operator: string) {
    this.display += operator;
  }

  clear() {
    this.display = '';
  }

  calculate() {
    this.display = eval(this.display).toString();
  }

}

bootstrapApplication(App);
