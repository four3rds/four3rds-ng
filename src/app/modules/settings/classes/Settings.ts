export class Settings {
  footerText: string = 'Default Footer Text -- Change in Settings';
  headerText: string = 'Default Header Text -- Change in Settings';

  constructor(settings?: Settings) {
    if (settings) {
      this.footerText = settings.footerText;
      this.headerText = settings.headerText;
    }
  }
}
