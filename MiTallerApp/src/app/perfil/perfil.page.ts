import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(public activeroute: ActivatedRoute, private router: Router, public authSerice: AuthenticationService) { }

  ngOnInit() {
  }

  async logout() {
    this.authSerice.cerrarSesion().then(()=>{
      this.router.navigate(['/login']);
    })
  }

  irPerfil() {
    this.router.navigate(['perfil']);
  }

  irUbicacion() {
    this.router.navigate(['ubicacion']);
  }

  irQr() {
    this.router.navigate(['qr']);
  }

  irHome() {
    this.router.navigate(['home']);
  }


}
