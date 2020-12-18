import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultText } from './trainer/default-text';

const localStorKey = 'localStorKey';

class LocalStor {
  times: number;
  presses: number;
  text: string;
}

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private localStor: LocalStor = {
    times: 0,
    presses: 0,
    text: '',
  };

  speed$ = new BehaviorSubject<number>(0);
  times$ = new BehaviorSubject<number>(0);
  presses$ = new BehaviorSubject<number>(0);
  sourceString$ = new BehaviorSubject<string>('');

  constructor() {
    this.sourceString$.next(defaultText);
    this.sourceString$.subscribe((str) => {
      this.localStor.text = str;
    });
  }

  takeSpeedData(time: number) {
    this.setTimes(this.localStor.times + time);
    this.setPresses(this.localStor.presses + 1);
    this.computeSpeed();
  }

  private computeSpeed() {
    if (this.localStor.times == 0) {
      this.speed$.next(0);
      return;
    }
    const speed = this.localStor.presses / (this.localStor.times / 1000 / 60);
    this.speed$.next(speed);
  }
  private setTimes(t) {
    this.localStor.times = t;
    this.times$.next(t);
  }
  private setPresses(n) {
    this.localStor.presses = n;
    this.presses$.next(n);
  }

  saveState() {
    localStorage.setItem(localStorKey, JSON.stringify(this.localStor));
  }

  activateState() {
    this.setTimes(this.localStor.times);
    this.setPresses(this.localStor.presses);
    this.computeSpeed();
    this.sourceString$.next(this.localStor.text);
  }

  setNullState() {
    this.localStor = {
      text: defaultText,
      times: 0,
      presses: 0,
    };
    this.activateState();
  }

  loadState() {
    const c = JSON.parse(localStorage.getItem(localStorKey));
    if (!c) {
      this.setNullState();
      return;
    }
    this.localStor = c;
    this.activateState();
    console.log('this.localStor', this.localStor);
  }
}
