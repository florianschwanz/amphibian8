import {TestBed} from '@angular/core/testing';

import {MaterialColorService} from './material-color.service';
import {UiImports} from '../ui.imports';
import {UiProviders} from '../ui.providers';

describe('MaterialColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [],
    imports: [UiImports],
    providers: [UiProviders]
  }));

  it('should be created', () => {
    const service: MaterialColorService = TestBed.get(MaterialColorService);
    expect(service).toBeTruthy();
  });
});
