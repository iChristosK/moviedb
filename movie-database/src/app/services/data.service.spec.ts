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

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  // *ADD MOVIE INTO ARRAY SPEC
  // it('addJob should add the job string to jobs array', () => {
  //   const job = 'Dummy Job';
  //   component.addJob(job); // action part
  //   expect(component.jobs.length).toBeGreaterThan(0);
  //   expect(component.jobs).toContain(job);
  // });

  it('movies length should be equal to 0', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.movies.length).toEqual(0);
  });
});
