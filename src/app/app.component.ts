import { Component, OnDestroy } from '@angular/core';
import { StatisticService } from './services/statistic-service.service';
import { TextService } from './services/text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private interval = 0;

  constructor(
    private statisticService: StatisticService,
    private textService: TextService
  ) {
    this.interval = setInterval(() => {
      this.statisticService.saveState();
      this.textService.saveState();
    }, 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
