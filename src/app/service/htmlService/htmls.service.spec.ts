import { TestBed } from '@angular/core/testing';

import { HtmlsService } from './htmls.service';

describe('HtmlsService', () => {
  let service: HtmlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HtmlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
