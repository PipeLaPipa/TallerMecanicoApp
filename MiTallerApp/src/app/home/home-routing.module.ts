import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PerfilComponent } from '../perfil/perfil.component';
import { UbicacionComponent } from '../ubicacion/ubicacion.component';
import { QrComponent } from '../qr/qr.component';
import { InformacionComponent } from '../informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'ubicacion',
        component: UbicacionComponent
      },
      {
        path: 'qr',
        component: QrComponent
      },
      {
        path: 'informacion',
        component: InformacionComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
