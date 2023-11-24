import { Component, OnInit } from '@angular/core';
import { Auto } from '../interfaces/auto';
import { LoadingController } from '@ionic/angular';
import { InfoService } from '../services/info.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-auto-detalle',
  templateUrl: './auto-detalle.page.html',
  styleUrls: ['./auto-detalle.page.scss'],
})
export class AutoDetallePage implements OnInit {

  cars: Auto[];

  constructor(public loadingCtrl: LoadingController, private infoService: InfoService) { }

  ngOnInit() {
    this.obtenerAutos();
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

}
