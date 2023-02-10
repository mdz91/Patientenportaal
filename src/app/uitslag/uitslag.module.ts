import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitslagRoutingModule } from './uitslag-routing.module';
import { UitslagComponent } from './uitslag.component';


@NgModule({
  declarations: [
    UitslagComponent
  ],
  imports: [
    CommonModule,
    UitslagRoutingModule
  ]
})
export class UitslagModule { }
