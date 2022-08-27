import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [LinksComponent],
  imports: [CommonModule, LinksRoutingModule, MaterialModule],
})
export class LinksModule {}
