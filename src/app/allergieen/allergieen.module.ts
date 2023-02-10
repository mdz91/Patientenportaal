import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllergieenRoutingModule } from './allergieen-routing.module';
import { AllergieenComponent } from './allergieen.component';


@NgModule({
  declarations: [
    AllergieenComponent
  ],
  imports: [
    CommonModule,
    AllergieenRoutingModule
  ]
})
export class AllergieenModule { }
