import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CarsService } from './cars.service';

describe('CarsService', () => {
  
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: CarsService = TestBed.get(CarsService);
    expect(service).toBeTruthy();
  });
});
