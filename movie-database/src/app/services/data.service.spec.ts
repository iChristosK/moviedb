import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { AddMoviePage } from '../pages/add-movie/add-movie.page';

import { DataService } from './data.service';

describe('DataService', () => {
  let component: AddMoviePage;
  let fixture: ComponentFixture<AddMoviePage>;
  let dataService;

  const DataServiceStud = {
    addMovie: () => null,
    getMovies: () => [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMoviePage],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide: dataService,
          useValue: DataServiceStud,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AddMoviePage);
    component = fixture.componentInstance;

    dataService = TestBed.inject(dataService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });

  it('movies should be an array', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.getMovies.length).toBeDefined();
  });

  it('movies length should be equal to 5', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service.movies.length).toEqual(5);
  });

  it('addMovie should add the new movie to movies array', () => {
    const service: DataService = TestBed.get(DataService);

    const movie = {
      name: 'Nope',
      year: 2022,
      actor: 'Daniel Kaluuya',
      rate: 8,
    };
    service.addMovie(movie);
    expect(service.movies.length).toEqual(6);
    expect(service.movies).toContain(movie);
  });

  it('addMovie should add the new movie to movies array - using spies', () => {
    const service: DataService = TestBed.get(DataService);

    const movie = {
      name: 'Nope',
      year: 2022,
      actor: 'Daniel Kaluuya',
      rate: 8,
    };

    spyOn(dataService, 'addMovie');
    spyOn(dataService, 'getMovies').and.returnValue([movie]);

    fixture.detectChanges();

    service.addMovie(movie);
    expect(service.movies.length).toBeGreaterThan(5);
    expect(service.movies.length).toEqual(6);
    expect(service.movies).toContain(movie);
  });

  it('addMovie should add the new movie to movies array - using callfake to add movie', () => {
    const service: DataService = TestBed.get(DataService);

    const movie = {
      name: 'Nope',
      year: 2022,
      actor: 'Daniel Kaluuya',
      rate: 8,
    };

    // call fake
    const movies = [];
    spyOn(dataService, 'addMovie').and.callFake((movie) => {
      movies.push(movie);
    });
    spyOn(dataService, 'getMovies').and.returnValue(movies);

    fixture.detectChanges();

    service.addMovie(movie);
    expect(service.movies.length).toBeGreaterThan(5);
    expect(service.movies.length).toEqual(6);
    expect(service.movies).toContain(movie);
  });

  it('addMovie should have called the service addMovie function', () => {
    const movie = {
      name: 'Nope',
      year: 2022,
      actor: 'Daniel Kaluuya',
      rate: 8,
    };

    // spy is capturing the call to function.
    spyOn(dataService, 'addMovie');
    dataService.addMovie(movie);

    // using toHaveBeenCalled and toHaveBeenCalledWith to check if the Spied function 'addMovie' was called.
    expect(dataService.addMovie).toHaveBeenCalled();
    expect(dataService.addMovie).toHaveBeenCalledWith(movie);
  });
});
