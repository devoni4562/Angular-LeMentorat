import { TestBed } from '@angular/core/testing';

import { LiveConferenceService } from './live-conference.service';

describe('LiveConferenceService', () => {
  let service: LiveConferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveConferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
