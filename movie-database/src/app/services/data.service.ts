import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  name: string;
  year: number;
  actors: string;
  rate: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public movies: Movie[] = [
    {
      id: 1,
      name: 'Prey',
      year: 2022,
      actors: 'Amber Midthunder, Dakota Beavers, Dane DiLiegro, Stormee Kipp',
      rate: 8,
    },
    {
      id: 2,
      name: 'Bullet Train',
      year: 2022,
      actors: ' Brad Pitt, Joey King, Aaron Taylor-Johnson, Brian Tyree Henry',
      rate: 7,
    },
    {
      id: 3,
      name: 'Thirteen Lives',
      year: 2022,
      actors: ' Viggo Mortensen, Colin Farrell, Joel Edgerton, Tom Bateman',
      rate: 6,
    },
    {
      id: 4,
      name: 'Purple Hearts',
      year: 2022,
      actors:
        'Sofia Carson, Nicholas Galitzine, Chosen Jacobs, John Harlan Kim',
      rate: 7,
    },
    {
      id: 5,
      name: 'Nope',
      year: 2022,
      actors: 'Daniel Kaluuya, Keke Palmer, Brandon Perea, Michael Wincott',
      rate: 8,
    },
  ];

  constructor() {}

  public getMovies(): Movie[] {
    return this.movies;
  }

  public getMovieById(id: number): Movie {
    return this.movies[id];
  }
}
