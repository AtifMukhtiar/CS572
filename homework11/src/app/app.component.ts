import {Component} from '@angular/core';

@Component({
  selector: 'main-root',
  template: `
    <p>
      Counter Component:
      <app-child-component (counterChange)="childCounter($event)"></app-child-component>
    </p>
    <p>Component Counter Value:{{counter}}</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HOMEWORRK-11';
  public counter: number = 0;

  childCounter(event) {
    this.counter = event;
  }
}
