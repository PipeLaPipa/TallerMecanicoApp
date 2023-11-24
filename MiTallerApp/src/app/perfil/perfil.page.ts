import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { AuthenticationService } from '../services/authentication.service';
import { InfoService } from '../services/info.service';
import { firstValueFrom } from 'rxjs';
import { Auto } from '../interfaces/auto';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  info: Usuario[];
  cars: Auto[];	
  
  constructor(public activeroute: ActivatedRoute, private router: Router, public authSerice: AuthenticationService, private infoService: InfoService, public firestore: AngularFirestore, public loadingCtrl: LoadingController) {
   }

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    this.obtenerDatosUsuario(userId);
    this.obtenerAutos();
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
  
  async obtenerAutos() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    try {
      const userId = localStorage.getItem('userId');
      const autos = await firstValueFrom(this.infoService.getCar('autos', userId))
      console.log('Autos del usuario:', autos);
      this.cars = [autos];
      loading.dismiss();
    } catch (error) {
      console.error('Error al obtener autos del usuario:', error);
      loading.dismiss();
    }
  }

  async logout() {
    this.authSerice.cerrarSesion().then(()=>{
      this.router.navigate(['/login']);
    })
  }

  irUbicacion() {
    this.router.navigate(['ubicacion']);
  }

  irHome() {
    this.router.navigate(['home']);
  }

  irAuto() {
    this.router.navigate(['/auto']);
  }

  irDetalleAuto() {
    this.router.navigate(['/auto-detalle']);
  }

}
