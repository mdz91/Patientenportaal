import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UitslagComponent } from './uitslag.component';

const routes: Routes = [
  {path: "uitslag", component: UitslagComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UitslagRoutingModule { }
