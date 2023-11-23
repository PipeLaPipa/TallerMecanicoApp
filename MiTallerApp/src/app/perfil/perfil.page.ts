import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { AuthenticationService } from '../services/authentication.service';
import { InfoService } from '../services/info.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  info: Usuario[];
  
  constructor(public activeroute: ActivatedRoute, private router: Router, public authSerice: AuthenticationService, private infoService: InfoService, public firestore: AngularFirestore) {
   }

  ngOnInit() {
    const userId = localStorage.getItem('userId');

    console.log({userId})
    this.obtenerDatosUsuario(userId);
  }

  async obtenerDatosUsuario(userId: string) {
    console.log('user ID:', userId);
  
    try {
      const usuario = await firstValueFrom(this.infoService.getUser('usuarios', userId));
      console.log('Datos del usuario:', usuario);
      this.info = [usuario];
    } catch (error) {
      console.error('Error al obtener datos del usuario:', error);
    }
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

  irHome() {
    this.router.navigate(['home']);
  }


}
