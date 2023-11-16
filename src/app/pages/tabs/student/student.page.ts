import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }

}
