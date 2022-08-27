import { Component } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { Settings } from './classes/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  editedSettings: Settings = new Settings();
  originalSettings: Settings = new Settings();

  constructor(private settingsService: SettingsService) {
    settingsService.getSettings().subscribe({
      next: (settings) => {
        this.originalSettings = settings;
        this.restore();
      },
    });
  }

  delete() {
    this.settingsService.save();
  }

  restore() {
    this.editedSettings = new Settings(this.originalSettings);
  }

  save() {
    this.settingsService.save(this.editedSettings);
  }
}
