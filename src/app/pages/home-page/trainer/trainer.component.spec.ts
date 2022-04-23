import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CharColors, TrainerComponent} from './trainer.component';

describe('TrainerComponent', () => {
  let component: TrainerComponent;
  let fixture: ComponentFixture<TrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('inputs', () => {

    component.onKeyPress({key: 'L'});
    expect(component.futureStringArr[0].char)
      .withContext('pushed first key right, check next char')
      .toBe('o');
    expect(component.pastStringArr[0].char)
      .withContext('pushed first key right, check pushed char')
      .toBe('L');

    component.onKeyPress({key: 'a'});
    expect(component.futureStringArr[0].char)
      .withContext('pushed second key wrong, check next char')
      .toBe('r');
    expect(component.pastStringArr[(component.pastStringArr.length - 1)].char)
      .withContext('pushed second key wrong, check pushed char(factual)')
      .toBe('|a|');
    expect(component.pastStringArr[(component.pastStringArr.length - 2)].char)
      .withContext('pushed second key wrong, check pushed char(required)')
      .toBe('|o|');

    expect(component.futureStringArr[4].char)
      .withContext('pushed second key wrong, check value of penalty-char')
      .toBe('o');
    expect(component.futureStringArr[4].color)
      .withContext('pushed second key wrong, check color of penalty-char')
      .toBe(CharColors.wrong);

  });

});
