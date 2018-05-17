import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getCTA();
  }

  public getCTA(): boolean {
    const action = JSON.parse(localStorage.getItem('obj'))['action'];
    if (action === 'true' || action === '') {
      return true;
    } else {
      return false;
    }
  }
}

