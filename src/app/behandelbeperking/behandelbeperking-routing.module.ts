import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BehandelbeperkingComponent } from './behandelbeperking.component';

const routes: Routes = [
  {path: "behandelbeperking", component: BehandelbeperkingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BehandelbeperkingRoutingModule { }
