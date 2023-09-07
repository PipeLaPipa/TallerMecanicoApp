import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  data: any;

  constructor(public activeroute: ActivatedRoute, private router: Router, private alertController: AlertController) {

  

    this.activeroute.queryParams.subscribe(params => {
      console.log(router.getCurrentNavigation()?.extras.state)
      if (this.router.getCurrentNavigation()?.extras.state) { 
        this.data = this.router.getCurrentNavigation()?.extras.state; 
        console.log(this.data.valorEnviar.usuario) 
      }else{this.router.navigate(["/login"])} 
    });

    

  }

  backLogin () {
    this.router.navigate(['/login']);
  }

}
