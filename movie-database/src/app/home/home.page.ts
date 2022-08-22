import { Component } from '@angular/core';
import { DataService, Movie } from '../services/data.service';
import { ModalController, NavController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private data: DataService,
    public modalController: ModalController,
    public navCtrl: NavController
  ) {
    this.filteredMovies = this.getMovies();
  }
  enableSearch: boolean = false;
  type: string = 'actor';
  searchTerm: string;
  filteredMovies: Movie[] = [];

  async presentModal(movie: Movie, movieIndex: number) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        movie: movie,
        movieIndex: movieIndex,
      },
    });

    return await modal.present();
  }

  getMovies(): Movie[] {
    return this.data.getMovies();
  }

  refresh(event) {
    setTimeout(() => {
      event.detail.complete();
    }, 3000);
  }

  search(query) {
    if (!query) {
      // revert back to the original array if no query
      this.filteredMovies = [...this.data.getMovies()];
    } else {
      // filter array by query
      if (this.type == 'actor') {
        this.filteredMovies = this.data.getMovies().filter((movie) => {
          return movie.actor.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      } else {
        this.filteredMovies = this.data.getMovies().filter((movie) => {
          return movie.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
        });
      }
    }
  }

  searchType(type: string) {
    this.type = type;
  }

  // Search bar
  showSearchBar() {
    this.enableSearch = true;
  }
  hideSearch() {
    this.enableSearch = false;
  }
}
