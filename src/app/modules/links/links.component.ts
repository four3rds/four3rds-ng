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
  refreshing: boolean = true;

  constructor(private dialog: MatDialog, private linksService: LinksService) {}

  private refreshLinks(links: Link[]) {
    console.log('LinksComponent::refreshLinks');
    console.log(links);
    this.refreshing = true;
    this.categorizedLinks.clear();
    links.forEach((link) => {
      if (this.categorizedLinks.has(link.category)) {
        this.categorizedLinks.get(link.category)!.push(link);
      } else {
        this.categorizedLinks.set(link.category, [link]);
      }
    });
    console.log(this.categorizedLinks);
    this.refreshing = false;
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
