import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { UbicacionComponent } from '../components/ubicacion/ubicacion.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, PerfilComponent,  InformacionComponent, UbicacionComponent]
})
export class HomePageModule {}
