import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Link } from '../../classes/Link';
import { LinkEditDialogComponent } from '../link-edit-dialog/link-edit-dialog.component';

@Component({
  selector: 'app-links-table-dialog',
  templateUrl: './links-table-dialog.component.html',
  styleUrls: ['./links-table-dialog.component.scss'],
})
export class LinksTableDialogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'categoryId', 'text', 'url'];
  links: Link[] = [];

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Link[]
  ) {}

  add() {
    this.dialog
      .open(LinkEditDialogComponent, {
        width: '80%',
      })
      .afterClosed()
      .subscribe((link) => {
        if (link) {
          this.links.push(link);
        }
      });
  }

  ngOnInit(): void {
    this.data.forEach((link) =>
      this.links.push(
        new Link(
          link.getId(),
          link.getCategoryId(),
          link.getText(),
          link.getUrl()
        )
      )
    );
  }

  save() {
    console.log('save()');
  }
}
