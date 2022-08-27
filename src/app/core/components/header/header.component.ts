import { Component, EventEmitter, Output } from '@angular/core';
import { Settings } from 'src/app/modules/settings/classes/Settings';
import { SettingsService } from 'src/app/shared/services/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output()
  menuClicked = new EventEmitter<boolean>();

  settings!: Settings;

  constructor(private settingsService: SettingsService) {
    settingsService.getSettings().subscribe({
      next: (settings) => (this.settings = settings),
    });
  }
}
