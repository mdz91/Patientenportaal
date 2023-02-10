import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfsprakenComponent } from './afspraken.component';

const routes: Routes = [
  {path:'afspraken', component:AfsprakenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AfsprakenRoutingModule { }
