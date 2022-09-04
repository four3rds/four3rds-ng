import { Component } from '@angular/core';

@Component({
  selector: 'app-links-table-dialog',
  templateUrl: './links-table-dialog.component.html',
  styleUrls: ['./links-table-dialog.component.scss'],
})
export class LinksTableDialogComponent {
  /*
  displayedColumns: string[] = ['operations', 'category', 'text', 'url'];
  links: Link[] = [];
  linksSubscription!: Subscription;

  constructor(
    private dialog: MatDialog,
    private linksService: LinksService,
    private snackBarService: SnackbarService
  ) {}

  add() {
    this.dialog.open(LinkEditDialogComponent, {
      data: new Link('', '', '', ''),
    });
  }

  delete(link: Link) {
    console.log('LinksTableDialogComponent::delete::' + link.id);
    this.linksService.delete(link.id).subscribe({
      next: (deleted) =>
        this.snackBarService.openSnackBar(link.text + ' deleted'),
    });
  }

  edit(link: Link) {
    console.log('LinksTableDialogComponent::edit::' + link.id);
    this.dialog.open(LinkEditDialogComponent, {
      data: link,
    });
    console.log('LinksTableDialogComponent::edit::exit');
  }

  ngOnDestroy(): void {
    if (this.linksSubscription) {
      this.linksSubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.linksSubscription = this.linksService.getLinks().subscribe({
      next: (links) =>
        (this.links = links.sort((a, b) => {
          if (a.category.localeCompare(b.category) != 0) {
            return a.category.localeCompare(b.category);
          } else {
            return a.text.localeCompare(b.text);
          }
        })),
    });
  }
  */
}
