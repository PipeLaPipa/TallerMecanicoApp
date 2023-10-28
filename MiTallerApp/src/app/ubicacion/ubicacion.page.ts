import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UbicacionService } from './ubicacion.service';
import { ModalController } from '@ionic/angular';
import { DOCUMENT } from '@angular/common';
import { Plugins } from '@capacitor/core';

declare var google: any;
const {Geolocation} = Plugins;

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  //coordenadascuenta
  @Input() position = {
    lat: -33.5984849,
    lng: -70.579503
  };

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;

  @ViewChild('map') divMap: ElementRef;

  constructor(public activeroute: ActivatedRoute, private router: Router,
    public authSerice: AuthenticationService, private googlemapsService: UbicacionService,
    public modalController: ModalController, private renderer: Renderer2, @Inject(DOCUMENT) private document) { }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    this.googlemapsService.init(this.renderer, this.document).then( () => {
      this.initMap();
    }).catch( (err) => {
      console.log(err);
    });
  }


  initMap() {
    const position = this.position;
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      disableDefaultUI: true,
      clickableIcons: false,
    };

    this.map = new google.maps.Map(this.divMap.nativeElement, mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      draggable: true,
    });
    this.clickHandleEvent();
    this.infowindow = new google.maps.InfoWindow();
    this.addMarker(position);
    /*this.infowindow = new google.maps.InfoWindow();
    if (this.label.titulo.length) {
      this*/
}

clickHandleEvent() {
  this.map.addListener('click', (event: any) => {
    const position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    this.addMarker(position);
  });
}

addMarker(position: any): void {

  let latLng = new google.maps.LatLng(position.lat, position.lng);

  this.marker.setPosition(latLng);
  this.map.panTo(position);
  this.positionSet = position;

}


/*async mylocation() {

  console.log('mylocation() click')

  Geolocation.getCurrentPosition().then((res) => {

        console.log('mylocation() -> get ', res);

        const position = {
              lat: res.coords.latitude,
              lng: res.coords.longitude,
        }
        this.addMarker(position);

  });

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

  irHome() {
    this.router.navigate(['home']);
  }


}
