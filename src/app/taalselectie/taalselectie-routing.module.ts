import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaalselectieComponent } from './taalselectie.component';

const routes: Routes = [
  {path: "taalselectie", component: TaalselectieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaalselectieRoutingModule { }
