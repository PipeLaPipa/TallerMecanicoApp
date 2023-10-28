import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoService } from '../services/info.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  info: Usuario[];
  
  constructor(public activeroute: ActivatedRoute, private router: Router, public authSerice: AuthenticationService, private infoService: InfoService) {
    {
      this.info = [{
        user: 'Pipe',
        email: 'Pipe@gmail.com',
      }];
    }
   }


  ngOnInit(): void {
    this.infoService.getInfo().subscribe(info =>{
      console.log(info);
    })
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
