import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agenda } from '../interfaces/agenda';
import { InfoService } from '../services/info.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-horas-agendadas',
  templateUrl: './horas-agendadas.page.html',
  styleUrls: ['./horas-agendadas.page.scss'],
})
export class HorasAgendadasPage implements OnInit {
  horasAgendadas: Agenda[] = [];

  constructor(
    private horasService: InfoService,
    public router: Router,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.formatHorasAgendadas();
  }

  formatHorasAgendadas() {
    this.horasService.getHorasAgendadas().subscribe((horas) => {
      console.log('horas ', JSON.stringify(horas, null, 3));

      const sortedHours = horas.sort(
        (a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime()
      );

      console.log('sorted horas ', JSON.stringify(sortedHours, null, 3));

      this.horasAgendadas = sortedHours;
    });
  }

  async irDetalleHoraAgendada(horaId) {

    this.navCtrl.navigateForward(`/hora-detalle/${horaId}`);
  }
}
