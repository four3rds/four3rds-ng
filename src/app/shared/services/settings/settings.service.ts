import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from 'src/app/modules/settings/classes/Settings';

const KEY = 'settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: BehaviorSubject<Settings>;

  constructor() {
    this.settings = new BehaviorSubject<Settings>(this.read());
  }

  getSettings(): BehaviorSubject<Settings> {
    return this.settings;
  }

  private read(): Settings {
    let json = localStorage.getItem(KEY);
    if (json) {
      return JSON.parse(json) as Settings;
    } else {
      return new Settings();
    }
  }

  save(settings?: Settings) {
    if (settings) {
      localStorage.setItem(KEY, JSON.stringify(settings));
      this.settings.next(settings);
    } else {
      localStorage.removeItem(KEY);
      this.settings.next(new Settings());
    }
  }
}
