import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { InfoService } from '../services/info.service';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  

  mensajeInput = 'Ingresar Nombre de Usuario';

  //valorEnviar={
  //  usuario:"",
  //  password:""
  //}

  constructor(public router: Router, public formBuilder: FormBuilder, public loadingCtrl: LoadingController, public authService: AuthenticationService, private infoService: InfoService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get controlErrores() {
    return this.loginForm?.controls;
  }


  async login() {
    if (this.loginForm?.valid) {
      const userCredential = await this.authService.loginUser(this.loginForm.value.email, this.loginForm.value.password).catch((error) => {
        console.log(error);
      });
  
      if (userCredential && userCredential.user  ) {
        console.log({userCredential})
        const userId = userCredential.user.uid;
        console.log('ID del usuario:', userId);
        
        // Ahora puedes usar userId para obtener los datos del usuario
        localStorage.setItem('userId', userId);
        // this.obtenerDatosUsuario(userId);
        const usuario: Usuario = await firstValueFrom(this.infoService.getUser('usuarios', userId));
        console.log('Datos del usuario:', usuario);
        
        if(usuario.role === 'cliente'){
          return this.router.navigate(['/home']);
        }

        if(usuario.role === 'mecanico'){
          return this.router.navigate(['/horas-agendadas']);
        }

        return;
      } else {
        console.log('Ingrese datos correctos');
      }
    }
  }


  /*goHome () {
    let navigationExtras: NavigationExtras = {
      state: {
        valorEnviar: this.valorEnviar
      }
    };
    this.router.navigate(['/home'], navigationExtras);
  }*/

  goRees () {
    this.router.navigate(['/reestablecer']);
  }

  goRegistro () {
    this.router.navigate(['/registrarse']);
  }
}
