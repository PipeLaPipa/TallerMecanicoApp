import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { LoadingController } from '@ionic/angular';
import { firstValueFrom } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../interfaces/usuario';
import { Agenda } from '../interfaces/agenda';

@Component({
  selector: 'app-hora-detalle',
  templateUrl: './hora-detalle.page.html',
  styleUrls: ['./hora-detalle.page.scss'],
})
export class HoraDetallePage implements OnInit {

  horaId: string;
  hora: Agenda[] = [];
  usuario: Usuario[];

  constructor(
    private infoService: InfoService,
    private loadingCtrl: LoadingController,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.horaId = this.route.snapshot.paramMap.get('id');
    this.detalleHoraAgendada()
  }

  async detalleHoraAgendada() {
    const loading = await this.loadingCtrl.create();
    await loading.present();

    try {
      console.log('Hora ID:', this.horaId)
      const horaDetalle = await firstValueFrom(
        this.infoService.getHour('agenda', this.horaId)
      );
      const userDetalle = await firstValueFrom(
        this.infoService.getUser('usuarios', this.horaId)
      );
      console.log('Hora agendada:', horaDetalle);

      if (horaDetalle && userDetalle) {
        this.hora = [horaDetalle];
        this.usuario = [userDetalle];
      }

      console.log('this usuario ',this.usuario)
      console.log('this hora ',this.hora)
      loading.dismiss();
    } catch (error) {
      console.error('Error al obtener autos del usuario:', error);
      loading.dismiss();
    }
  }

}
