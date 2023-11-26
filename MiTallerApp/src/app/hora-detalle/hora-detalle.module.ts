import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoraDetallePageRoutingModule } from './hora-detalle-routing.module';

import { HoraDetallePage } from './hora-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoraDetallePageRoutingModule
  ],
  declarations: [HoraDetallePage]
})
export class HoraDetallePageModule {}
