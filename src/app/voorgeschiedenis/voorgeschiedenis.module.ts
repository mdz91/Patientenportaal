import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoorgeschiedenisRoutingModule } from './voorgeschiedenis-routing.module';
import { VoorgeschiedenisComponent } from './voorgeschiedenis.component';


@NgModule({
  declarations: [
    VoorgeschiedenisComponent
  ],
  imports: [
    CommonModule,
    VoorgeschiedenisRoutingModule
  ]
})
export class VoorgeschiedenisModule { }
