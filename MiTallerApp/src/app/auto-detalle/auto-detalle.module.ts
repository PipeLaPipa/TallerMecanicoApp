import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoDetallePageRoutingModule } from './auto-detalle-routing.module';

import { AutoDetallePage } from './auto-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoDetallePageRoutingModule
  ],
  declarations: [AutoDetallePage]
})
export class AutoDetallePageModule {}
