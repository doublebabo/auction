import { TestBed } from '@angular/core/testing';

import { WsServiceService } from './ws-service.service';

describe('WsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsServiceService = TestBed.get(WsServiceService);
    expect(service).toBeTruthy();
  });
});
