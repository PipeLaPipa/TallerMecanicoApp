import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PMecanicoPageRoutingModule } from './p-mecanico-routing.module';

import { PMecanicoPage } from './p-mecanico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PMecanicoPageRoutingModule
  ],
  declarations: [PMecanicoPage]
})
export class PMecanicoPageModule {}
