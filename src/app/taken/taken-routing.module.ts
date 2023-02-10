import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakenComponent } from './taken.component';

const routes: Routes = [
  {path: "taken", component: TakenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakenRoutingModule { }
