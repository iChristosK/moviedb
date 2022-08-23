import { Injectable } from '@angular/core';
import { Movie } from '../models/movie';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public toastController: ToastController) {}

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

  public getMovies(): Movie[] {
    return this.movies;
  }

  public addMovie(movie: Movie): Movie[] {
    if (!movie) {
      this.presentToastForUndefinedMovie();
    } else {
      this.movies.push(movie);
      this.presentToastForAddedMovie(movie.name);
    }

    return this.movies;
  }

  public getMovieByName(name: string): Movie {
    return this.movies[name];
  }

  public overwriteRating(
    movie: Movie,
    movies: Movie[],
    newRating: number
  ): Movie[] {
    let index = movies.findIndex((m) => m.name === movie.name);
    if (index !== -1) {
      movies[index] = {
        name: movie.name,
        year: movie.year,
        actor: movie.actor,
        rate: newRating,
      };
    }
    return movies;
  }

  // TOAST CONTROLLERS ALERTS
  async presentToastForAddedMovie(name: string) {
    const toast = await this.toastController.create({
      message: 'New movie ' + name + ' has been added.',
      color: 'dark',
      animated: true,
      duration: 3500,
    });
    toast.present();
  }
  async presentToastRatedMovie(name: string) {
    const toast = await this.toastController.create({
      message: 'Movie ' + name + ' has been successfully rated.',
      color: 'dark',
      animated: true,
      duration: 3500,
    });
    toast.present();
  }

  async presentToastForUndefinedMovie() {
    const toast = await this.toastController.create({
      message: 'Movie was not undefined',
      color: 'danger',
      animated: true,
      duration: 3500,
    });
    toast.present();
  }
}
