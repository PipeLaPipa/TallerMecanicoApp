import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroHorasPageRoutingModule } from './registro-horas-routing.module';

import { RegistroHorasPage } from './registro-horas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroHorasPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroHorasPage]
})
export class RegistroHorasPageModule {}
