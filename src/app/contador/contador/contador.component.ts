import { Component } from "@angular/core";


@Component({
  selector: 'app-contador',
  template: `
  <h1>{{ title }}</h1>

<h3>La base es de: <strong>{{ base }}</strong></h3>

<button (click)="modify(+ base)"> + {{ base }} </button>

<span>{{ counter }}</span>

<button (click)="modify(- base)"> - {{ base }} </button>

<button (click)="modify(-counter)" >Restart</button>
  `
})


export class ContadorComponent {
  public title: string = 'Contador App';
  public counter: number = 0;
  public base: number = 5;

  modify(value: number) {
    this.counter += value;
  }

}