import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddMoviePageRoutingModule } from './add-movie-routing.module';
import { AddMoviePage } from './add-movie.page';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyFieldCustomInput } from './custom-input.component';
import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';
import { FormlyMaterialModule } from '@ngx-formly/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMoviePageRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyMaterialModule,
    FormlyMatNativeSelectModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        {
          name: 'custom',
          component: FormlyFieldCustomInput,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
  declarations: [AddMoviePage],
})
export class AddMoviePageModule {}
