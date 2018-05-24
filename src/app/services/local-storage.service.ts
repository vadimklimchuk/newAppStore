import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class LocalStorageService {

  setLocaleStorageBg(formModel) {
    localStorage.setItem('bg', JSON.stringify(formModel.value.background));
  }

  setLocaleStorageView(formModel) {
    localStorage.setItem('view', JSON.stringify(formModel.value.viewDashboard));
  }

  setLocaleStorageCallTo(formModel) {
    localStorage.setItem('callTo', JSON.stringify(formModel.value.action));
  }

  getBackground() {
    const storageBg = localStorage.getItem('bg');
    const bg = JSON.parse(storageBg);

    if (bg !== null) {
      return bg;
    }
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
