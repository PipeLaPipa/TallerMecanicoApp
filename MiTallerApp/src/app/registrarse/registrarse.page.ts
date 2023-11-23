import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { InfoService } from '../services/info.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {
  form: FormGroup;

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    private infoService: InfoService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['cliente']
    });
  }

  get controlErrores() {
    return this.form?.controls;
  }

  async registrar() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.form?.valid) {
      try {
        const { uid, userCredential } = await this.authService.registerUser(this.form.value.email, this.form.value.password);
        
        if (userCredential) {
          // Utiliza el uid al agregar la información a Firestore
          await this.infoService.addInfo(uid, this.form.value);
          loading.dismiss();
          this.router.navigate(['/login']);

        } else {
          console.log('Ingrese datos correctos');
        }
      } catch (error) {
        console.log(error);
        loading.dismiss();
      }
    }
  }
}
