import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakenRoutingModule } from './taken-routing.module';
import { TakenComponent } from './taken.component';


@NgModule({
  declarations: [
    TakenComponent
  ],
  imports: [
    CommonModule,
    TakenRoutingModule
  ]
})
export class TakenModule { }
