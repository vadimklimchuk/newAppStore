import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class LocalStorageService {
  callToActionSubject = new Subject();
  adminThemeSubject = new Subject();
  adminBgSubject = new Subject();

  constructor() { }

  setLocaleStorageBg(formModel) {
    localStorage.setItem('bg', JSON.stringify(formModel.value.background));
  }

  setLocaleStorageView(formModel) {
    localStorage.setItem('view', JSON.stringify(formModel.value.viewDashboard));
  }

  setLocaleStorageCallTo(formModel) {
    localStorage.setItem('callTo', JSON.stringify(formModel.value.action));
  }
}
