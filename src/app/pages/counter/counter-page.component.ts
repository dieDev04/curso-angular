import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(0);

  constructor() {
    // setInterval(() => {
    //   this.increaseBy(1);
    //   console.log('Tick');
    // }, 1000);
  }

  increaseBy(value: number) {
    this.counter += value;
    // this.counterSignal.set(this.counterSignal() + value);
    this.counterSignal.update((oldValue) => oldValue + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    // this.counterSignal.set(this.counterSignal() - value);
    this.counterSignal.update((oldValue) => oldValue - value);
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
