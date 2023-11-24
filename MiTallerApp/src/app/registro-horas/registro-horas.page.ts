import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, MenuController } from '@ionic/angular';
import { InfoService } from '../services/info.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.page.html',
  styleUrls: ['./registro-horas.page.scss'],
})
export class RegistroHorasPage implements OnInit {
  form: FormGroup;

  constructor(
    public activeroute: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private menuCtrl: MenuController,
    private infoService: InfoService,
    private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fecha: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      // horasTrabajadas: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  }

  async agendarHora() {
    // Aquí puedes manejar la lógica para enviar los datos del formulario
    // Por ejemplo, puedes utilizar this.form.value para obtener los valores.
    console.log(this.form.value);
    const loading = await this.loadingCtrl.create();
    await loading.present();

    if (this.form?.valid) {
      try {
        
        const userId = localStorage.getItem('userId');

        if (userId) {
          // Utiliza el uid al agregar la información a Firestore
          await this.infoService.addHour(userId, this.form.value);
          loading.dismiss();
          this.irPerfil()

        } else {
          console.log('Ingrese datos correctos');
        }
      } catch (error) {
        console.log(error);
        loading.dismiss();
      }
    }
  }

  irPerfil() {
    this.router.navigate(['/perfil']);
  }

}
