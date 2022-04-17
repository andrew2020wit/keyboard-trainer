import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-service.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss'],
})
export class SettingPageComponent implements OnInit {

  text = '';

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.text = this.generalService.getText();
  }

  saveText(): void {
    if (this.text.length < 100) {
      return;
    }
    this.generalService.setNewText(this.text);
  }

  clearState(): void {
    this.generalService.setNullState();
  }

  resetText(): void {
    this.generalService.resetText();
    this.text = this.generalService.getText();
  }
}
