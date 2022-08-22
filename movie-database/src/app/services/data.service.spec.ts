import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let dataServiceSpy;

  beforeEach(() => {
    dataServiceSpy = jasmine.createSpyObj('DataService', {
      movies: [],
    });
    service = new DataService();
    TestBed.configureTestingModule({
      providers: [
        DataService,
        { provide: DataService, useValue: dataServiceSpy },
      ],
    });
  });

  describe('net pay calculations', () => {});

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
