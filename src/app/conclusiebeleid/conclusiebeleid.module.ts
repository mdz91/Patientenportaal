import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConclusiebeleidRoutingModule } from './conclusiebeleid-routing.module';
import { ConclusiebeleidComponent } from './conclusiebeleid.component';


@NgModule({
  declarations: [
    ConclusiebeleidComponent
  ],
  imports: [
    CommonModule,
    ConclusiebeleidRoutingModule
  ]
})
export class ConclusiebeleidModule { }
