import { Component } from '@angular/core';

@Component({
  selector: 'app-link-edit-dialog',
  templateUrl: './link-edit-dialog.component.html',
  styleUrls: ['./link-edit-dialog.component.scss'],
})
export class LinkEditDialogComponent {
  /*
  category: string;
  id: string;
  text: string;
  url: string;

  constructor(
    private linksService: LinksService,
    private snackBarService: SnackbarService,
    public dialogRef: MatDialogRef<LinkEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Link
  ) {
    this.category = this.data.category;
    this.id = this.data.id;
    this.text = this.data.text;
    this.url = this.data.url;
  }

  save() {
    console.log('LinkEditDialogComponent::save::entry');
    const link = new Link(this.id, this.category, this.text, this.url);
    if (!link.id) {
      this.linksService.create(link).subscribe({
        next: (id) => {
          this.id = id;
          this.snackBarService.openSnackBar(this.text + ' created');
          this.dialogRef.close();
        },
      });
    } else {
      this.linksService.update(link).subscribe({
        next: (updated) => {
          this.snackBarService.openSnackBar(this.text + ' updated');
          this.dialogRef.close();
        },
      });
    }
    console.log('LinkEditDialogComponent::save::exit');
  }
  */
}
