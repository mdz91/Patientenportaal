import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarkmodeComponent } from './darkmode.component';

const routes: Routes = [
  {path: 'darkmode' , component: DarkmodeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarkmodeRoutingModule { }
