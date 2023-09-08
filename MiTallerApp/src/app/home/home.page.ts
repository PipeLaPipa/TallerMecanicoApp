import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isAlertOpen =false;
  data: any;
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        this.isAlertOpen=false;      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.router.navigate(["/login"]) 
      },
    },
  ];

  constructor(public activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) {



    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state;
      } else { this.router.navigate(["/login"]) }
    });



  }

  setResult(ev: any) {
  }
  setOpen(isOpen: boolean) {
      this.isAlertOpen = !this.isAlertOpen;

  



  }


}
