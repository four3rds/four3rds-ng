import { Component } from '@angular/core';
import { Settings } from 'src/app/modules/settings/classes/Settings';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  settings!: Settings;

  constructor(private settingsService: SettingsService) {
    settingsService.getSettings().subscribe({
      next: (settings) => (this.settings = settings),
    });
  }
}
