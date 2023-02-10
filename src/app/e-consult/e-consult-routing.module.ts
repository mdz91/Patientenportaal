import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EConsultComponent } from './e-consult.component';

const routes: Routes = [
  {path: "e-consult", component: EConsultComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EConsultRoutingModule { }
