import { TestBed } from '@angular/core/testing';

import { ShareService } from './ShareService';

describe('ShareserviceService', () => {
  let service: ShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
