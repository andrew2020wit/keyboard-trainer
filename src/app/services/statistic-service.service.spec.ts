import { TestBed } from '@angular/core/testing';
import { StatisticService } from './statistic-service.service';

describe('GeneralServiceService', () => {
  let service: StatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
