import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Link } from '../../classes/Link';

@Component({
  selector: 'app-link-edit-dialog',
  templateUrl: './link-edit-dialog.component.html',
  styleUrls: ['./link-edit-dialog.component.scss'],
})
export class LinkEditDialogComponent implements OnInit {
  categoryId!: string;

  id!: string;

  text!: string;

  url!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Link) {}

  newLink(): Link {
    return new Link(this.id, this.categoryId, this.text, this.url);
  }

  ngOnInit(): void {
    this.categoryId = this.data?.getCategoryId();
    this.id = this.data?.getId();
    this.text = this.data?.getText();
    this.url = this.data?.getUrl();
  }
}
