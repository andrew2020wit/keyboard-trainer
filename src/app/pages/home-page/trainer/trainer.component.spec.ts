import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CharColors, TrainerComponent} from './trainer.component';
import {defaultText} from '../../../default-data/default-text';

describe('TrainerComponent', () => {
  let component: TrainerComponent;
  let fixture: ComponentFixture<TrainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainerComponent],
    }).compileComponents();
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
    component.onKeyPress({key: defaultText[0]});
    expect(component.futureStringArr[0].char)
      .withContext('pushed first key right, check next char')
      .toBe(defaultText[1]);
    expect(component.pastStringArr[0].char)
      .withContext('pushed first key right, check pushed char')
      .toBe(defaultText[0]);

    const wrongChar = 'a';

    component.onKeyPress({key: wrongChar});
    expect(component.futureStringArr[0].char)
      .withContext('pushed second key wrong, check next char')
      .toBe(defaultText[2]);
    expect(component.pastStringArr[component.pastStringArr.length - 1].char)
      .withContext('pushed second key wrong, check pushed char(factual)')
      .toBe('|' + wrongChar + '|');
    expect(component.pastStringArr[component.pastStringArr.length - 2].char)
      .withContext('pushed second key wrong, check pushed char(required)')
      .toBe('|' + defaultText[1] + '|');

    expect(component.futureStringArr[4].char)
      .withContext('pushed second key wrong, check value of penalty-char')
      .toBe(defaultText[1]);
    expect(component.futureStringArr[4].color)
      .withContext('pushed second key wrong, check color of penalty-char')
      .toBe(CharColors.wrong);
  });
});
