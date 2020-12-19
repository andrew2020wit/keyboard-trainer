import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { defaultText } from './trainer/default-text';

const localStorKey = 'localStorKey';
const localStorTextKey = 'localStorTextKey';

class AppState {
  times: number;
  presses: number;
  textPointer: number;
}

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  private appState: AppState = {
    times: 0,
    presses: 0,
    textPointer: 0,
  };

  private text = '';

  speed$ = new BehaviorSubject<number>(0);
  times$ = new BehaviorSubject<number>(0);
  presses$ = new BehaviorSubject<number>(0);

  constructor() {}

  takeSpeedData(time: number) {
    this.setTimes(this.appState.times + time);
    this.setPresses(this.appState.presses + 1);
    this.computeSpeed();
  }

  private computeSpeed() {
    if (this.appState.times == 0) {
      this.speed$.next(0);
      return;
    }
    const speed = this.appState.presses / (this.appState.times / 1000 / 60);
    this.speed$.next(speed);
  }

  private setTimes(t) {
    this.appState.times = t;
    this.times$.next(t);
  }

  private setPresses(n) {
    this.appState.presses = n;
    this.presses$.next(n);
  }

  saveState() {
    localStorage.setItem(localStorKey, JSON.stringify(this.appState));
  }

  newText(str: string) {
    this.text = str;
    this.appState.textPointer = 0;
    localStorage.setItem(localStorTextKey, str);
  }

  private activateState() {
    this.setTimes(this.appState.times);
    this.setPresses(this.appState.presses);
    this.computeSpeed();
  }

  setNullState() {
    this.appState = {
      textPointer: 0,
      times: 0,
      presses: 0,
    };
    this.activateState();
    this.saveState();
  }

  loadState() {
    const c = JSON.parse(localStorage.getItem(localStorKey));
    if (!c) {
      this.setNullState();
      return;
    }
    this.appState = c;

    // text
    let text = localStorage.getItem(localStorTextKey);
    if (!text) {
      text = defaultText;
    }
    this.text = text;

    this.activateState();
  }

  getNextChar(): string {
    if (this.appState.textPointer >= this.text.length) {
      this.appState.textPointer = 0;
    }
    const char = this.text.substr(this.appState.textPointer, 1);
    this.appState.textPointer = this.appState.textPointer + 1;
    return char;
  }

  getText() {
    return this.text;
  }
}
