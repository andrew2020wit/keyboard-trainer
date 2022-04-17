import { Component, OnInit } from '@angular/core';
import { StatisticService } from '../../services/statistic-service.service';
import {TextService} from '../../services/text.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss'],
})
export class SettingPageComponent implements OnInit {

  text = '';

  constructor(private textService: TextService, private statisticService: StatisticService) {}

  ngOnInit(): void {
    this.text = this.textService.getText();
  }

  saveText(): void {
    if (this.text.length < 100) {
      return;
    }
    this.textService.setNewText(this.text);
  }

  clearState(): void {
    this.statisticService.setNullState();
  }

  resetText(): void {
    this.textService.resetText();
    this.text = this.textService.getText();
  }
}
