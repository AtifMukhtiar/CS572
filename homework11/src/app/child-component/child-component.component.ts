import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <button (click)="decrement()">-</button>
    {{counter}}
    <button (click)="increment()">+</button>`,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  public counter: number = 0;

  @Output() counterChange = new EventEmitter<number>();

  decrement() {
    this.counter = this.counter - 1;
    this.counterChange.emit(this.counter);
  }

  increment() {
    this.counter = this.counter + 1;
    this.counterChange.emit(this.counter);
  }

  constructor() {

  }

  ngOnInit() {
  }

}
