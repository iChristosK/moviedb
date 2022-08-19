import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  name: string;
  year: number;
  actor: string;
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
      actor: 'Amber Midthunder',
      rate: 8,
    },
    {
      id: 2,
      name: 'Bullet Train',
      year: 2022,
      actor: ' Brad Pitt',
      rate: 7,
    },
    {
      id: 3,
      name: 'Thirteen Lives',
      year: 2022,
      actor: ' Viggo Mortensen',
      rate: 6,
    },
    {
      id: 4,
      name: 'Purple Hearts',
      year: 2022,
      actor: 'Sofia Carson',
      rate: 7,
    },
    {
      id: 5,
      name: 'Nope',
      year: 2022,
      actor: 'Daniel Kaluuya',
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
