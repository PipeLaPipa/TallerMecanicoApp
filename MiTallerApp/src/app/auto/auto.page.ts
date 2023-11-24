import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { InfoService } from '../services/info.service';
import { Auto } from '../interfaces/auto';
import { format } from 'date-fns';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {
  form: FormGroup;
  fechaActual: Date = new Date();

  constructor(
    public router: Router,
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public authService: AuthenticationService,
    private infoService: InfoService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      marca: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      year: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      patente: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
      color: ['', [Validators.required]],
      fecha_ingreso: [format(this.fechaActual, 'dd-MM-yyyy HH:mm')]
    });

  }

  get controlErrores() {
    return this.form?.controls;
  }

  async registrarAuto() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.form?.valid) {
      try {
        
        const userId = localStorage.getItem('userId');

        if (userId) {
          // Utiliza el uid al agregar la información a Firestore
          await this.infoService.addCar(userId, this.form.value);
          loading.dismiss();
          this.router.navigate(['/perfil']);

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
