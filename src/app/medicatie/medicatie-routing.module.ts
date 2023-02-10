import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicatieComponent } from './medicatie.component';

const routes: Routes = [
  {path:'medicatie', component:MedicatieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicatieRoutingModule { }
