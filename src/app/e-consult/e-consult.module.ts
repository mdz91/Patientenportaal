import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EConsultRoutingModule } from './e-consult-routing.module';
import { EConsultComponent } from './e-consult.component';


@NgModule({
  declarations: [
    EConsultComponent
  ],
  imports: [
    CommonModule,
    EConsultRoutingModule
  ]
})
export class EConsultModule { }
