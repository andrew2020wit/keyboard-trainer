import { Component, OnInit } from '@angular/core';
import { defaultText } from './default-text';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  baseString = defaultText;

  futureString = 'futureString';
  futureStringArr = [];

  pastString = '';
  pastStringArr = [];

  inputValue = '';

  constructor() {}

  ngOnInit(): void {}

  onKeyDown(event) {
    const key = event.key;
    // this.pastString = this.pastString + key;
    this.pastStringArr.push(key);

    this.inputValue = '';
  }
}
