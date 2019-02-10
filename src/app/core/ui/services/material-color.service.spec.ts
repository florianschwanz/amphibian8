import {TestBed} from '@angular/core/testing';

import {MaterialColorService} from './material-color.service';

describe('MaterialColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialColorService = TestBed.get(MaterialColorService);
    expect(service).toBeTruthy();
  });
});
