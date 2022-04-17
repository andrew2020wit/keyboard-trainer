import { Component } from '@angular/core';
import { StatisticService } from './services/statistic-service.service';
import {TextService} from './services/text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private statisticService: StatisticService, private textService: TextService) {

    setInterval(() => {
      this.statisticService.saveState();
      this.textService.saveState();
    }, 2000);

  }
}
