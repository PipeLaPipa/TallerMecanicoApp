import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

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
