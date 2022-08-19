import { Component } from '@angular/core';
import { DataService, Movie } from '../services/data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private data: DataService,
    public dialog: MatDialog,
    public navCtrl: NavController,
    public actionSheetController: ActionSheetController
  ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getMovies(): Movie[] {
    return this.data.getMovies();
  }

  filter(): Movie[] {
    // return this.data.getMovies().sort((a, b) => a.name.localeCompare(b.name));
    return this.data.getMovies().sort((a, b) => a.actor.localeCompare(b.actor));
  }
}
