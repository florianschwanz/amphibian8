import {TestBed} from '@angular/core/testing';

import {MaterialIconService} from './material-icon.service';

describe('MaterialIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialIconService = TestBed.get(MaterialIconService);
    expect(service).toBeTruthy();
  });
});
