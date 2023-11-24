import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { MenuController, NavController } from '@ionic/angular';
import { InfoService } from '../services/info.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    public activeroute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    public authSerice: AuthenticationService,
    private menuCtrl: MenuController,
    private infoService: InfoService
  ) {}

  ngOnInit(): void {
  }

  async logout() {
    this.authSerice.cerrarSesion().then(() => {
      this.router.navigate(['/login']);
    });
  }

  irPerfil() {
    this.router.navigate(['perfil']);
  }

  irUbicacion() {
    this.router.navigate(['ubicacion']);
  }

  irAgenda() {
    this.router.navigate(['registro-horas']);
  }
}
