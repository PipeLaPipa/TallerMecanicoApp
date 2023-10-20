import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { MenuController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  data: any;
  qrString = 'Es un secreto'

  

  constructor(public activeroute: ActivatedRoute, private router: Router, private alertController: AlertController, public authSerice: AuthenticationService, private menuCtrl: MenuController) {


   

    /*this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
      } else { this.router.navigate(["/home"]) }
    });*/



  }

  /*setResult(ev: any) {
  }*/

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


}

