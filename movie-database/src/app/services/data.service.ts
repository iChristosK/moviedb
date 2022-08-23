import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public movies: Movie[] = [
    {
      name: 'Prey',
      year: 2022,
      actor: 'Amber Midthunder',
      rate: 8,
    },
    {
      name: 'Bullet Train',
      year: 2022,
      actor: ' Brad Pitt',
      rate: 7,
    },
    {
      name: 'Thirteen Lives',
      year: 2022,
      actor: ' Viggo Mortensen',
      rate: 6,
    },
    {
      name: 'Purple Hearts',
      year: 2022,
      actor: 'Sofia Carson',
      rate: 7,
    },
    {
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

  public getMovieByName(name: string): Movie {
    return this.movies[name];
  }
}
