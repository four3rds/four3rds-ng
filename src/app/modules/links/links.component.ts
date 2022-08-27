import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Link } from './classes/Link';
import { LinksTableDialogComponent } from './components/links-table-dialog/links-table-dialog.component';
import { LinksService } from './services/links/links.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  links: Link[] = [];

  constructor(private dialog: MatDialog, private linksService: LinksService) {}

  ngOnInit(): void {
    this.linksService
      .read()
      .subscribe({ next: (link) => this.links.push(link) });
  }

  edit() {
    this.dialog
      .open(LinksTableDialogComponent, {
        width: '80%',
        data: this.links,
      })
      .afterClosed()
      .subscribe((result) => {
        console.log(`Dialog result: ${result}`);
      });
  }
}
