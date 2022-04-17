import { Component } from '@angular/core';
import { StatisticService } from '../../../../services/statistic-service.service';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss'],
})
export class InfoPanelComponent {
  speed = 0;
  time = 0;
  timeStr = '';
  presses = 0;

  constructor(private generalService: StatisticService) {
    this.generalService.speed$.subscribe((speed) => {
      this.speed = Math.round(speed);
    });

    this.generalService.presses$.subscribe((presses) => {
      if (!presses) {
        this.presses = 0;
      } else {
        this.presses = presses + 1;
      }
    });

    this.generalService.times$.subscribe((times) => {
      this.time = times;
      this.computeTimeStr();
    });
  }

  computeTimeStr() {
    let s, m, h, t: number;
    t = Math.floor(this.time / 1000);
    h = Math.floor(t / (60 * 60));
    t = t - h * (60 * 60);
    m = Math.floor(t / 60);
    s = t - m * 60;
    this.timeStr = h + ' hr, ' + m + ' m, ' + s + ' s.';
  }
}
