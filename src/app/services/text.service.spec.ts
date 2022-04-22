import { TestBed } from '@angular/core/testing';

import { TextService } from './text.service';

describe('TextService', () => {
  let service: TextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get third char of default text', () => {
    service.getNextChar();
    service.getNextChar();
    expect(service.getNextChar()).toBe('r');
  });

  it('get first char of default text', () => {
    expect(service.getNextChar()).toBe('L');
  });

});
