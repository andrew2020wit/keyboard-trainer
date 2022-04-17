import { Component, OnDestroy } from '@angular/core';
import { StatisticService } from '../../../../services/statistic-service.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent implements OnDestroy {
  speed = 0;
  timeStr = '';
  presses = 0;

  private readonly unsubscribe$ = new Subject<void>();

  constructor(private generalService: StatisticService) {
    this.generalService.speedPerMinute$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((speed) => {
        this.speed = Math.round(speed);
      });

    this.generalService.presses$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((presses) => {
        if (!presses) {
          this.presses = 0;
        } else {
          this.presses = presses + 1;
        }
      });

    this.generalService.times$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((times) => {
        this.timeStr = InfoPanelComponent.computeTimeStr(times);
      });
  }

  public static computeTimeStr(time): string {
    const timeSeconds = Math.floor(time / 1000);
    const hours = Math.floor(timeSeconds / (60 * 60));
    const timeSecondsWithoutHours = timeSeconds - hours * (60 * 60);
    const minutes = Math.floor(timeSecondsWithoutHours / 60);
    const seconds = timeSecondsWithoutHours - minutes * 60;
    return hours + ' hr, ' + minutes + ' m, ' + seconds + ' s.';
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
