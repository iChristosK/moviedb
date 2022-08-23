import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  ModalController,
  NavController,
  ToastController,
} from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Movie } from '../models/movie';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() movie: Movie;
  @Input() movieIndex: number;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'rating',
      type: 'native-select',
      templateOptions: {
        label: 'Rating',
        placeholder: 'Please rate movie from 1-10 stars',
        required: true,
        options: [
          { value: 1, label: 1 },
          { value: 2, label: 2 },
          { value: 3, label: 3 },
          { value: 4, label: 4 },
          { value: 5, label: 5 },
          { value: 6, label: 6 },
          { value: 7, label: 7 },
          { value: 8, label: 8 },
          { value: 9, label: 9 },
          { value: 10, label: 10 },
        ],
      },
    },
  ];

  constructor(
    private data: DataService,
    public navigationController: NavController,
    public toastController: ToastController,
    public modalController: ModalController
  ) {
    this.movie;
  }

  ngOnInit() {
    if (this.movie) {
      this.fields[0].defaultValue = this.movie.rate;
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async presentToast(name: string) {
    const toast = await this.toastController.create({
      message: 'Movie ' + name + ' has been successfully rated.',
      color: 'dark',
      animated: true,
      duration: 3500,
    });
    toast.present();
  }

  overwriteModel(movie: Movie, newRating: number) {
    console.log(movie, 'movie');
    let index = this.data.movies.findIndex((m) => m.name === movie.name);
    if (index !== -1) {
      this.data.getMovies()[index] = {
        name: movie.name,
        year: movie.year,
        actor: movie.actor,
        rate: newRating,
      };
    }
  }

  submit() {
    if (this.form.valid) {
      this.overwriteModel(this.movie, this.model['rating']);
      this.presentToast(this.movie.name);
      this.closeModal();
    }
  }
}
