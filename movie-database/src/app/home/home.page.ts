import { Component } from '@angular/core';
import { DataService, Movie } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private data: DataService,
    public dialog: MatDialog,
    public navCtrl: NavController
  ) {
    this.filteredMovies = this.getMovies();
  }
  getMovies(): Movie[] {
    return this.data.getMovies();
  }

  enableSearch: boolean = false;
  type: string = 'actor';
  searchTerm: string;
  filteredMovies: Movie[] = [];

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
          return movie.actor.includes(query);
        });
      } else {
        this.filteredMovies = this.data.getMovies().filter((movie) => {
          return movie.name.includes(query);
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

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
