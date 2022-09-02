import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Link } from './classes/Link';
import { LinksTableDialogComponent } from './components/links-table-dialog/links-table-dialog.component';
import { LinksService } from './services/links/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnDestroy, OnInit {
  categorizedLinks = new Map<string, Link[]>();
  linksSubscription!: Subscription;

  constructor(private dialog: MatDialog, private linksService: LinksService) {}

  private refreshLinks(links: Link[]) {
    console.log('LinksComponent::refreshLinks');
    this.categorizedLinks.clear();
    links.forEach((link) => {
      // This is not the most-efficient way to do this, but it'll work for now.
      console.log(
        link.id + '::' + link.category + '::' + link.text + '::' + link.url
      );
      if (!this.categorizedLinks.has(link.category)) {
        this.categorizedLinks.set(link.category, [link]);
      } else {
        this.categorizedLinks.get(link.category)!.push(link);
        this.categorizedLinks
          .get(link.category)!
          .sort((a, b) => (a.text < b.text ? -1 : a.text > b.text ? 1 : 0));
      }
    });
    console.log(
      'LinksComponent::refreshLinks::this.categorizedLinks.size::' +
        this.categorizedLinks.size
    );
  }

  getCategories(): string[] {
    return Array.from(this.categorizedLinks.keys()).sort();
  }

  getCategorizedLinks(category: string): Link[] {
    return this.categorizedLinks
      .get(category)!
      .sort((a, b) => a.text.localeCompare(b.text));
  }

  ngOnDestroy(): void {
    if (this.linksSubscription) {
      this.linksSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.linksSubscription = this.linksService.getLinks().subscribe({
      next: (links) => this.refreshLinks(links),
    });
  }

  edit() {
    this.dialog.open(LinksTableDialogComponent);
  }
}
