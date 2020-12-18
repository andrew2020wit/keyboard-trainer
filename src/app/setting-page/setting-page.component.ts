import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general-service.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss'],
})
export class SettingPageComponent implements OnInit {
  text = '';

  constructor(private generalService: GeneralService) {
    this.generalService.sourceString$.subscribe((str) => {
      this.text = str;
    });
  }

  ngOnInit(): void {}

  saveText() {
    if (this.text.length < 100) {
      return;
    }
    this.generalService.sourceString$.next(this.text);
  }

  clearState() {
    this.generalService.setNullState();
  }
}
