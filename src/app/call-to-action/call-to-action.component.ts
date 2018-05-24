import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent implements OnInit {

  constructor(public localStorage: LocalStorageService) { }

  ngOnInit() {
    this.getCTA();
  }

  getCTA() {
    return this.localStorage.getCTA();
  }
}

