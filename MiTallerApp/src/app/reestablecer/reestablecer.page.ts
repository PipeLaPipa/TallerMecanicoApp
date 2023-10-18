import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit { 

  constructor(public router: Router, public authService: AuthenticationService, public toastController: ToastController,) { }

  email: any;

  ngOnInit() {
  }


  reset(){
    this.authService.resetPass(this.email).then( () =>{      
      console.log('sent'); //show confirmation dialog
      this.presentToast()
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your reset password link has been sent on your email',
      duration: 2000, // Duration in milliseconds
      position: 'bottom' // Position of the toast (top, bottom, middle)
    });
  
    toast.present();
    toast.onDidDismiss().then(()=>{
      this.router.navigate(['/login']);
    })
  }

  backLogin () {
    this.router.navigate(['/login'])
  }
}
