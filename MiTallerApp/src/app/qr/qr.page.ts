import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit, OnDestroy {

  qrString = 'Probando QR';
  resultadoScan: any;
  content_visibility = '';

  constructor(public activeroute: ActivatedRoute, private router: Router, public authSerice: AuthenticationService) { }

  async checkPermiso() {
    try {
      //Comprobar o solicitar permisos
      const status = await BarcodeScanner.checkPermission({force:true});
      if (status.granted){
        //usuario da permisos
        return true; 
      }
      return false;
    }catch(e){
      console.log(e);
    }
  }

  async scanear() {
    try {
      const permission = await this.checkPermiso();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.resultadoScan = result.content;
        console.log(this.resultadoScan);
      }
    } catch(e) {
      console.log(e);
      this.detenerScaneo();
    }
  }

  /*async scanear() {
    try {
      const permisos = await this.chekPermiso();
      if(!permisos) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const resultado = await BarcodeScanner.startScan();
      console.log(resultado);
      this.content_visibility = 'show';
      if(resultado?.hasContent) {
        this.resultadoScan = resultado.content;
        BarcodeScanner.showBackground();
        document.querySelector('body').classList.remove('scanner-active');
        console.log(this.resultadoScan);
      }
    }catch(e){
      console.log(e)
      this.detenerScaneo();
    }
  }*/

  detenerScaneo() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');

  }

  ngOnInit() {
  }

  
  ngOnDestroy(): void {
    this.detenerScaneo();
  }

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

  irQr() {
    this.router.navigate(['qr']);
  }

  irHome() {
    this.router.navigate(['home']);
  }

}
