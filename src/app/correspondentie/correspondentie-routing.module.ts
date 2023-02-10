import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrespondentieComponent } from './correspondentie.component';

const routes: Routes = [
  { path:'correspondentie', component: CorrespondentieComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondentieRoutingModule { }
