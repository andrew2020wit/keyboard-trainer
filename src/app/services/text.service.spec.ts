import {TestBed} from '@angular/core/testing';
import {TextService} from './text.service';

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get next char of default text', () => {

    expect(service.getNextChar())
      .withContext('get first char')
      .toBe('L');

    expect(service.getNextChar())
      .withContext('get second char')
      .toBe('o');

    expect(service.getNextChar())
      .withContext('get third char')
      .toBe('r');
  });

});
