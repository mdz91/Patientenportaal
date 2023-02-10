import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientenvoorlichtingRoutingModule } from './patientenvoorlichting-routing.module';
import { PatientenvoorlichtingComponent } from './patientenvoorlichting.component';


@NgModule({
  declarations: [
    PatientenvoorlichtingComponent
  ],
  imports: [
    CommonModule,
    PatientenvoorlichtingRoutingModule
  ]
})
export class PatientenvoorlichtingModule { }
