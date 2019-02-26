import {TestBed} from '@angular/core/testing';

import {MaterialIconService} from './material-icon.service';
import {UiImports} from '../ui.imports';
import {UiProviders} from '../ui.providers';

describe('MaterialIconService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [UiImports],
    providers: [UiProviders]
  }));

  it('should be created', () => {
    const service: MaterialIconService = TestBed.get(MaterialIconService);
    expect(service).toBeTruthy();
  });
});
