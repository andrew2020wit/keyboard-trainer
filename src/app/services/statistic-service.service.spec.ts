import { TestBed } from '@angular/core/testing';
import { StatisticService } from './statistic-service.service';

describe('StatisticService', () => {
  let service: StatisticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatisticService);
    service.takeSpeedData(500);
    service.takeSpeedData(1500);
    service.takeSpeedData(1000);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('presses$ should be properly computed', (done) => {
    service.presses$.subscribe(presses => {
      expect(presses).toBe(3);
      done();
    });
  });

  it('times$ should be properly computed', (done) => {
    service.times$.subscribe(time => {
      expect(time).toBe(3000);
      done();
    });
  });

  it('speedPerMinute$ should be properly computed', (done) => {
    service.speedPerMinute$.subscribe(speedPerMinute => {
      expect(speedPerMinute).toBe(60);
      done();
    });
  });

});
