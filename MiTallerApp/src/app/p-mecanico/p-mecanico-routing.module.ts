import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PMecanicoPage } from './p-mecanico.page';

const routes: Routes = [
  {
    path: '',
    component: PMecanicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PMecanicoPageRoutingModule {}
