import { Component, OnDestroy } from '@angular/core';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';
import { Settings } from './classes/Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnDestroy {
  private settingsSubscription;

  editedSettings: Settings = new Settings();

  originalSettings: Settings = new Settings();

  constructor(private settingsService: SettingsService) {
    this.settingsSubscription = settingsService.getSettings().subscribe({
      next: (settings) => {
        this.originalSettings = settings;
        this.restore();
      },
    });
  }

  ngOnDestroy(): void {
    this.settingsSubscription.unsubscribe();
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
