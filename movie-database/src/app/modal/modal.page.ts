import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataService, Movie } from '../services/data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() movie: Movie;
  @Input() movieIndex: number;

  constructor(
    private data: DataService,
    public navigationController: NavController,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    console.log(this.movie, this.movieIndex);
  }

  back() {
    this.navigationController.back();
  }
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

  async presentToast(name: string) {
    const toast = await this.toastController.create({
      message: 'New movie ' + name + ' has been added.',
      color: 'dark',
      animated: true,
      duration: 3500,
    });
    toast.present();
  }

  submit() {
    if (this.form.valid) {
      var name = this.model['name'];
      var year = this.model['year'];
      var actor = this.model['actor'];
      this.presentToast(name);

      this.data.movies.push({
        name: name,
        year: year,
        actor: actor,
        rate: 9,
      });
    }
  }
}
