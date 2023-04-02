import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

class StatisticState {
  times = 0;
  presses = 0;
}

@Injectable({
  providedIn: 'root',
})
export class StatisticService {

  speedPerMinute$ = new BehaviorSubject<number>(0);
  times$ = new BehaviorSubject<number>(0);
  presses$ = new BehaviorSubject<number>(0);

  private statisticState = new StatisticState();
  private readonly localStorageStatisticStateKey = 'StatisticState';

  constructor() {
    this.loadState();
  }

  setNullState(): void {
    this.statisticState = {
      times: 0,
      presses: 0,
    };

    this.activateState();
    this.saveState();
  }

  saveState(): void {
    localStorage.setItem(this.localStorageStatisticStateKey, JSON.stringify(this.statisticState));
  }

  takeSpeedData(time: number): void {
    this.setTimes(this.statisticState.times + time);
    this.setPresses(this.statisticState.presses + 1);
    this.computeSpeed();
  }

  private loadState(): void {
    const statisticStateFromStore = JSON.parse(localStorage.getItem(this.localStorageStatisticStateKey)) as StatisticState;

    if (statisticStateFromStore?.times) {
      this.statisticState = statisticStateFromStore;
    } else {
      this.setNullState();
    }

    this.activateState();
  }

  private computeSpeed(): void {
    if (this.statisticState.times === 0) {
      this.speedPerMinute$.next(0);

      return;
    }

    const speed = this.statisticState.presses / (this.statisticState.times / 1000 / 60);
    this.speedPerMinute$.next(speed);
  }

  private setTimes(time): void {
    this.statisticState.times = time;
    this.times$.next(time);
  }

  private setPresses(n): void {
    this.statisticState.presses = n;
    this.presses$.next(n);
  }

  private activateState(): void {
    this.setTimes(this.statisticState.times);
    this.setPresses(this.statisticState.presses);
    this.computeSpeed();
  }

}
