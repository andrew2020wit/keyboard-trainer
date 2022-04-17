import { Component } from '@angular/core';
import { GeneralService } from './services/general-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private generalService: GeneralService) {

    this.generalService.loadState();

    setInterval(() => {
      this.generalService.saveState();
    }, 2000);

  }
}
