import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  //AIzaSyDXv7lY5q0UrF_ovBufaMh_eNVVmrN6pQo

  apiKey = environment.ApiKeyGoogleMaps;
  mapsLoaded = false;

  constructor() { }

  init(renderer: any, document: any): Promise<any> {
    return new Promise((resolve) => {
      if(this.mapsLoaded) {
        console.log('google is preview loaded')
        resolve(true);
        return;
      }
      const script = renderer.createElement('script');
      script.id = 'googleMaps';

      window['mapInit'] = () => {
        this.mapsLoaded = true;
        if (google) {
          console.log('google is loaded')
        } else {
          console.log('google is not defined')
        }
        resolve(true);
        return;
      }

      if(this.apiKey){
        script.src = 'https://maps.googleapis.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      }else{
        script.src = 'https://maps.googleapis.com/maps/api/js?callback=mapInit';
      }
      renderer.appendChild(document.body, script);
    });
  }

  centrarMapaEnUbicacion(latitud: number, longitud: number, mapa: any) {
    const ubicacion = new google.maps.LatLng(latitud, longitud);
    mapa.panTo(ubicacion);
  }

  obtenerUbicacionActual(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
