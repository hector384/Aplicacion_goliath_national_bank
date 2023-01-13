import { TestBed } from '@angular/core/testing';

import { TproductsService } from './tproducts.service';

describe('TproductsService', () => {
  let service: TproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
