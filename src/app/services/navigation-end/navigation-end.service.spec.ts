import { TestBed } from '@angular/core/testing';

import { NavigationEndService } from './navigation-end.service';

describe('NavigationEndService', () => {
  let service: NavigationEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
