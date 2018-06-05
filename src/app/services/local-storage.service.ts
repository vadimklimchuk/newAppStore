import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class LocalStorageService {

  setLocaleStorageBg(background) {
    localStorage.setItem('bg', JSON.stringify(background));
  }

  setLocaleStorageView(viewDashboard) {
    localStorage.setItem('view', JSON.stringify(viewDashboard));
  }

  setLocaleStorageCallTo(action) {
    localStorage.setItem('callTo', JSON.stringify(action));
  }

  getBackground() {
    const storageBg = localStorage.getItem('bg');
    const bg = JSON.parse(storageBg);

    return bg || '';
  }


  getViewDashboard() {
    const storageDashboard = localStorage.getItem('view');
    const view = JSON.parse(storageDashboard);

    if (view !== null && view === 'list') {
      return view;
    }
  }

  getCTA() {
    const action = JSON.parse(localStorage.getItem('callTo'));
    return JSON.parse(action || action !== null);
  }
}
