import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BehandelbeperkingRoutingModule } from './behandelbeperking-routing.module';
import { BehandelbeperkingComponent } from './behandelbeperking.component';


@NgModule({
  declarations: [
    BehandelbeperkingComponent
  ],
  imports: [
    CommonModule,
    BehandelbeperkingRoutingModule
  ]
})
export class BehandelbeperkingModule { }
