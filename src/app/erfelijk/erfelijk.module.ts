import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErfelijkRoutingModule } from './erfelijk-routing.module';
import { ErfelijkComponent } from './erfelijk.component';


@NgModule({
  declarations: [
    ErfelijkComponent
  ],
  imports: [
    CommonModule,
    ErfelijkRoutingModule
  ]
})
export class ErfelijkModule { }
