import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoDetallePage } from './auto-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AutoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoDetallePageRoutingModule {}
