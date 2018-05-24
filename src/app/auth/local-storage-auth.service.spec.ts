import { TestBed, inject } from '@angular/core/testing';

import { LocalStorageAuthService } from './local-storage-auth.service';

describe('LocalStorageAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageAuthService]
    });
  });

  it('should be created', inject([LocalStorageAuthService], (service: LocalStorageAuthService) => {
    expect(service).toBeTruthy();
  }));
});
