import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrespondentieRoutingModule } from './correspondentie-routing.module';
import { CorrespondentieComponent } from './correspondentie.component';


@NgModule({
  declarations: [
    CorrespondentieComponent
  ],
  imports: [
    CommonModule,
    CorrespondentieRoutingModule
  ]
})
export class CorrespondentieModule { }
