import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  backLogin () {
    this.router.navigate(['/login'])
  }
}
