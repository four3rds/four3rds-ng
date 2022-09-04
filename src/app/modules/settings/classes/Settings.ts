export class Settings {
  footerText: string = "Let's Ride";
  headerText: string = 'Four3rds';

  constructor(settings?: Settings) {
    if (settings) {
      this.footerText = settings.footerText;
      this.headerText = settings.headerText;
    }
  }
}
