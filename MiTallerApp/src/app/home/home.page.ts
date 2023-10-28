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


  data: any;
  qrString = 'Es un secreto'
  info: Usuario[];

  constructor(public activeroute: ActivatedRoute, private router: Router, private alertController: AlertController, public authSerice: AuthenticationService, private menuCtrl: MenuController, private infoService: InfoService) {

    {
      this.info = [{
        user: 'Pipe',
        email: 'Pipe@gmail.com',
      }];
    }
   

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


  ngOnInit(): void {
    this.infoService.getInfo().subscribe(info =>{
      console.log(info);
    })
  }

}

