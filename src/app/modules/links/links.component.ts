import { Component } from '@angular/core';
import { LinkCategoriesService } from './services/link-categories/link-categories.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent {
  constructor(private linkCategoriesService: LinkCategoriesService) {}
  edit() {
    console.log('edit()');
  }
}
