import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImplantaatComponent } from './implantaat.component';

const routes: Routes = [
  { path:'implantaat', component: ImplantaatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImplantaatRoutingModule { }
