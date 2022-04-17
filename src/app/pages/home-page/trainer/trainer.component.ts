import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general-service.service';

class ColorChar {
  char: string;
  color: CharColors;
}

enum CharColors {
  true = 'black',
  wrong = 'red',
  wrong2 = 'yellow',
}

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss'],
})
export class TrainerComponent implements OnInit {
  futureStringArr: ColorChar[] = [];
  futureStringArrMaxLength = 30;

  pastStringArr: ColorChar[] = [];
  pastStringArrMaxLength = 30;

  inputValue = '';

  maxDeltaTime = 3000;
  time1 = 0;
  time2 = 0;

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.generalService.resetCurrentTextPointer();
    this.fillFutureStringArr();
  }

  fillFutureStringArr(): void {
    while (this.futureStringArr.length < this.futureStringArrMaxLength) {

      const nextChar = this.generalService.getNextChar();

      const colorChar: ColorChar = {
        char: nextChar,
        color: CharColors.true,
      };

      this.futureStringArr.push(colorChar);
    }
  }

  onKeyPress(event): void {
    const key = event.key;
    const needKey = this.futureStringArr[0].char;

    if (this.futureStringArr[0].color === CharColors.true) {
      this.generalService.setNextStartTextPoint();
    }

    if (needKey === key) {
      this.pushPastStringArr({
        char: needKey,
        color: CharColors.true,
      });

      // speed measuring
      this.time2 = Date.now();
      const deltaTime = this.time2 - this.time1;
      if (deltaTime < this.maxDeltaTime) {
        this.generalService.takeSpeedData(deltaTime);
      }
      this.time1 = this.time2;

    } else {
      this.pushPastStringArr({
        char: `|${needKey}|`,
        color: CharColors.wrong,
      });
      this.pushPastStringArr({
        char: `|${key}|`,
        color: CharColors.wrong2,
      });
      this.addPenaltyChar(needKey);
    }

    this.futureStringArr.shift();
    this.fillFutureStringArr();

    this.inputValue = '';
  }

  pushPastStringArr(colorChar: ColorChar): void {
    this.pastStringArr.push(colorChar);
    if (this.pastStringArr.length > this.pastStringArrMaxLength) {
      this.pastStringArr.shift();
    }
  }

  addPenaltyChar(char: string): void {
    const newFutureStringArr: ColorChar[] = [];
    const wrongChar: ColorChar = { char, color: CharColors.wrong };
    const countOfPenaltyChar = 5;
    const penaltyCharInterval = 5;

    for (let j = 0; j < countOfPenaltyChar; j++) {
      for (let i = 0; i < penaltyCharInterval; i++) {
        if (this.futureStringArr.length === 0) {
          break;
        }
        newFutureStringArr.push(this.futureStringArr.shift());
      }
      newFutureStringArr.push(wrongChar);
    }

    while (this.futureStringArr.length !== 0) {
      newFutureStringArr.push(this.futureStringArr.shift());
    }

    this.futureStringArr = newFutureStringArr;
  }
}
