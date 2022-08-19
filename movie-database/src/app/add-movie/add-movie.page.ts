import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage implements OnInit {
  constructor(public navigationController: NavController) {}

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
      className: 'formname',
      templateOptions: {
        label: 'Movie name',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'year',
      type: 'input',
      templateOptions: {
        label: 'Release Year',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'actor',
      type: 'native-select',
      templateOptions: {
        label: 'Select Actor',
        placeholder: 'Actor',

        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
        ],
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
