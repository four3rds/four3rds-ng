import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { LinksTableDialogComponent } from './components/links-table-dialog/links-table-dialog.component';
import { LinkEditDialogComponent } from './components/link-edit-dialog/link-edit-dialog.component';

@NgModule({
  declarations: [LinksComponent, LinksTableDialogComponent, LinkEditDialogComponent],
  imports: [CommonModule, LinksRoutingModule, MaterialModule],
})
export class LinksModule {}
