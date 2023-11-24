import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroHorasPage } from './registro-horas.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroHorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroHorasPageRoutingModule {}
