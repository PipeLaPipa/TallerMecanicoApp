import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mensajeInput = 'Ingresar Nombre de Usuario';

  valorEnviar={
    usuario:"",
    password:""
  }

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goHome () {
    let navigationExtras: NavigationExtras = {
      state: {
        valorEnviar: this.valorEnviar
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }

  goRees () {
    this.router.navigate(['/reestablecer']);
  }
}
