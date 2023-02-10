import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpnamesComponent } from './opnames.component';

const routes: Routes = [
  {path:"opnames", component:OpnamesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpnamesRoutingModule { }
