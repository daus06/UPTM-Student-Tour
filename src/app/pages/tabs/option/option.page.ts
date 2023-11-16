import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-option',
  templateUrl: './option.page.html',
  styleUrls: ['./option.page.scss'],
})
export class OptionPage implements OnInit {

  constructor(private router : Router, private navCtrl: NavController) { }

  goToFloorPage() {
    this.router.navigate(['tabs/floor']);
  }

  goToFacilitiesPage() {
    this.router.navigate(['tabs/facilities']);
  }
  goToLecturerPage() {
    this.router.navigate(['tabs/lecturer']);
  }
  goToStudentPage() {
    this.router.navigate(['tabs/student']);
  }

  ngOnInit() {
  }

}
