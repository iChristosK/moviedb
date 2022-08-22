import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
  constructor(
    private data: DataService,
    public navigationController: NavController,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

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
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Movie name',
        placeholder: 'Input movie name',
        required: true,
      },
    },
    {
      key: 'year',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Release Year',
        placeholder: 'Input release year',
        required: true,
      },
    },
    {
      key: 'actor',
      type: 'native-select',
      templateOptions: {
        label: 'Select Actor/Actress',
        placeholder: 'Actor/Actress',

        required: true,
        options: [
          { value: 'Angelina Jolie', label: 'Angelina Jolie' },
          { value: 'Brad Pitt', label: 'Brad Pitt' },
          { value: 'Jennifer Lawrence', label: 'Jennifer Lawrence' },
          { value: 'Leonardo DiCaprio', label: 'Leonardo DiCaprio' },
        ],
      },
    },
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
      var rate = this.model['rating'];

      this.data.movies.push({
        name: name,
        year: year,
        actor: actor,
        rate: rate,
      });
      this.presentToast(name);
    }
  }
}
