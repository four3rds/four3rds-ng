import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Link } from 'src/app/core/services/link/Link';
import { LinkService } from 'src/app/core/services/link/link.service';
import { Type } from 'src/app/core/services/type/Type';
import {
  PARENT_TYPE_LINK,
  TypeService,
} from 'src/app/core/services/type/type.service';
import { LinksTableDialogComponent } from './components/links-table-dialog/links-table-dialog.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
})
export class LinksComponent implements OnInit {
  linkTypes: Type[] = [];
  linkTypesPopulated = false;

  constructor(
    private typesService: TypeService,
    private linksService: LinkService,
    private dialog: MatDialog
  ) {}

  getLinksByType(typeId: string) {
    const links: Link[] = [];
    let complete = false;
    this.linksService.getLinks(typeId).subscribe({
      next: (v) => links.push(v),
      complete: () => (complete = true),
    });
    do {} while (!complete);
    return links;
  }

  ngOnInit(): void {
    this.typesService.getTypes(PARENT_TYPE_LINK).subscribe({
      next: (v) => this.linkTypes.push(v),
      complete: () => (this.linkTypesPopulated = true),
    });
  }

  edit() {
    this.dialog.open(LinksTableDialogComponent);
  }
}
