import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpnamesRoutingModule } from './opnames-routing.module';
import { OpnamesComponent } from './opnames.component';


@NgModule({
  declarations: [
    OpnamesComponent
  ],
  imports: [
    CommonModule,
    OpnamesRoutingModule
  ]
})
export class OpnamesModule { }
