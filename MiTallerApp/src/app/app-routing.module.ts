import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'reestablecer',
    loadChildren: () => import('./reestablecer/reestablecer.module').then( m => m.ReestablecerPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'registrarse',
    loadChildren: () => import('./registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'p-mecanico',
    loadChildren: () => import('./p-mecanico/p-mecanico.module').then( m => m.PMecanicoPageModule)
    //canActivate: [AuthGuardService]//Guard
  },
  {
    path: 'auto',
    loadChildren: () => import('./auto/auto.module').then( m => m.AutoPageModule)
  },
  {
    path: 'auto-detalle',
    loadChildren: () => import('./auto-detalle/auto-detalle.module').then( m => m.AutoDetallePageModule)
  },
  {
    path: 'registro-horas',
    loadChildren: () => import('./registro-horas/registro-horas.module').then( m => m.RegistroHorasPageModule)
  },
  {
    path: 'horas-agendadas',
    loadChildren: () => import('./horas-agendadas/horas-agendadas.module').then( m => m.HorasAgendadasPageModule)
  },
  {
    path: 'hora-detalle/:id',
    loadChildren: () => import('./hora-detalle/hora-detalle.module').then( m => m.HoraDetallePageModule)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found.component').then( m => m.NotFoundComponent)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
