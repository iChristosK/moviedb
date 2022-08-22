import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ModalPageRoutingModule } from './modal-routing.module';
import { ModalPage } from './modal.page';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatNativeSelectModule } from '@ngx-formly/material/native-select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ModalPageRoutingModule,
    FormlyBootstrapModule,
    FormlyMaterialModule,
    FormlyMatNativeSelectModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  declarations: [ModalPage],
})
export class ModalPageModule {}
