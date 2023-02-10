import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientenvoorlichtingComponent } from './patientenvoorlichting.component';

const routes: Routes = [
  { path: "patientenvoorlichting", component: PatientenvoorlichtingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientenvoorlichtingRoutingModule { }
