import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let dataServiceSpy;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', {
      federalIncomeTax: 0,
      stateIncomeTax: 0,
      socialSecurity: 0,
      medicare: 0,
    });
    service = new DataService();
    TestBed.configureTestingModule({});
  });

  describe('net pay calculations', () => {});

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
