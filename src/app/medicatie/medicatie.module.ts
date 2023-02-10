import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicatieRoutingModule } from './medicatie-routing.module';
import { MedicatieComponent } from './medicatie.component';


@NgModule({
  declarations: [
    MedicatieComponent
  ],
  imports: [
    CommonModule,
    MedicatieRoutingModule
  ]
})
export class MedicatieModule { }
