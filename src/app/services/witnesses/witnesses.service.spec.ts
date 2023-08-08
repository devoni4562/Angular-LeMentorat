import {TestBed} from '@angular/core/testing';

import {WitnessesService} from './witnesses.service';

describe('WitnessesService', () =>
{
  let service: WitnessesService;

  beforeEach(() =>
  {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WitnessesService);
  });

  it('should be created', () =>
  {
    expect(service).toBeTruthy();
  });
});
