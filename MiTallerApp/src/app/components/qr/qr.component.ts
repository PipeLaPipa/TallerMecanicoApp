import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss'],
})
export class QrComponent  implements OnInit, OnDestroy {

  qrString = 'Probando QR';
  resultadoScan: any; 

  constructor() { }

  async chekPermiso() {
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
      const permisos = await this.chekPermiso();
      if(!permisos) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      const resultado = await BarcodeScanner.startScan();
      console.log(resultado);
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
  }

  detenerScaneo() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');

  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.detenerScaneo();
  }
}
