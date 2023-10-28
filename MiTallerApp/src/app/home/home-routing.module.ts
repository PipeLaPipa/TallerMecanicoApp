import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { UbicacionComponent } from '../components/ubicacion/ubicacion.component';
import { InformacionComponent } from '../components/informacion/informacion.component';

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
