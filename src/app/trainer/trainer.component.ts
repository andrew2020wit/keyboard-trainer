import { Component, OnInit } from '@angular/core';
import { defaultText } from './default-text';

class ColorChar {
  char: string;
  color: CharColors;
}

enum CharColors {
  true = 'black',
  wrong = 'red',
  wrong2 = 'yellow',
  special = 'blue',
}

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  sourceString = ' ' + defaultText;
  sourceStringPointer = 0;

  futureStringArr: ColorChar[] = [];
  futureStringArrMaxLength = 30;

  pastStringArr: ColorChar[] = [];
  pastStringArrMaxLength = 30;

  inputValue = '';

  constructor() {}

  ngOnInit(): void {
    this.fillFutureStringArr();
  }

  onKeyPress(event) {
    const key = event.key;

    if (this.futureStringArr[0].char == key) {
      this.pushPastStringArr({
        char: this.futureStringArr[0].char,
        color: CharColors.true,
      });
    } else {
      this.pushPastStringArr({
        char: this.futureStringArr[0].char,
        color: CharColors.wrong,
      });
      this.pushPastStringArr({
        char: `/${key}/`,
        color: CharColors.wrong2,
      });
    }

    this.futureStringArr.shift();
    this.fillFutureStringArr();

    this.inputValue = '';
  }

  pushPastStringArr(colorChar: ColorChar) {
    this.pastStringArr.push(colorChar);
    if (this.pastStringArr.length > this.pastStringArrMaxLength) {
      this.pastStringArr.shift();
    }
  }

  fillFutureStringArr() {
    while (this.futureStringArr.length < this.futureStringArrMaxLength) {
      if (this.sourceStringPointer >= this.sourceString.length) {
        this.sourceStringPointer = 0;
      }

      const colorChar: ColorChar = {
        char: this.sourceString.substr(this.sourceStringPointer, 1),
        color: CharColors.true,
      };

      this.sourceStringPointer++;

      this.futureStringArr.push(colorChar);
    }
  }
}
