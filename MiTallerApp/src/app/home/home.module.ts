import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';
import { QrComponent } from '../components/qr/qr.component';
import { InformacionComponent } from '../components/informacion/informacion.component';
import { UbicacionComponent } from '../components/ubicacion/ubicacion.component';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    QRCodeModule
  ],
  declarations: [HomePage, PerfilComponent, QrComponent, InformacionComponent, UbicacionComponent]
})
export class HomePageModule {}
