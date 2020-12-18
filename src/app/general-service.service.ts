import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultText } from './trainer/default-text';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  times = 0;
  presses = 0;

  speed$ = new BehaviorSubject<number>(0);
  times$ = new BehaviorSubject<number>(0);
  presses$ = new BehaviorSubject<number>(0);
  sourceString$ = new BehaviorSubject<string>('');

  constructor() {
    this.sourceString$.next(defaultText);
  }

  takeSpeedData(time: number) {
    this.setTemes(this.times + time);
    this.setPresses(this.presses + 1);
    this.computeSpeed();
  }

  computeSpeed() {
    const speed = this.presses / (this.times / 1000 / 60);
    this.speed$.next(speed);
  }
  setTemes(t) {
    this.times = t;
    this.times$.next(t);
  }
  setPresses(n) {
    this.presses = n;
    this.presses$.next(n);
  }
}
