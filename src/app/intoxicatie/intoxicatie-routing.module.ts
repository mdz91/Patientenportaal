import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntoxicatieComponent } from './intoxicatie.component';

const routes: Routes = [ 
  { path:'intoxicatie', component: IntoxicatieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntoxicatieRoutingModule { }
