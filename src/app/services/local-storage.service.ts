import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class LocalStorageService {

  public setLocaleStorageBg(background) {
    localStorage.setItem('bg', JSON.stringify(background));
  }

  public setLocaleStorageView(viewDashboard) {
    localStorage.setItem('view', JSON.stringify(viewDashboard));
  }

  public setLocaleStorageCallTo(action) {
    localStorage.setItem('callTo', JSON.stringify(action));
  }

  public getBackground() {
    const storageBg = localStorage.getItem('bg');
    const bg = JSON.parse(storageBg);

    return bg || '';
  }


  public getViewDashboard() {
    const storageDashboard = localStorage.getItem('view');
    const view = JSON.parse(storageDashboard);

    if (view !== null && view === 'list') {
      return view;
    }
  }

  public getCTA() {
    const action = JSON.parse(localStorage.getItem('callTo'));
    return JSON.parse(action || action !== null);
  }
}
