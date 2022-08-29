import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Settings } from 'src/app/modules/settings/classes/Settings';
import { KEY_SETTINGS } from '../../classes/Constants';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: BehaviorSubject<Settings> = new BehaviorSubject<Settings>(
    this.read()
  );

  constructor() {}

  private read(): Settings {
    let json = localStorage.getItem(KEY_SETTINGS);
    if (json) {
      return JSON.parse(json) as Settings;
    } else {
      return new Settings();
    }
  }

  getSettings(): BehaviorSubject<Settings> {
    return this.settings;
  }

  save(settings?: Settings) {
    if (settings) {
      localStorage.setItem(KEY_SETTINGS, JSON.stringify(settings));
      this.settings.next(settings);
    } else {
      localStorage.removeItem(KEY_SETTINGS);
      this.settings.next(new Settings());
    }
  }
}
