import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConclusiebeleidComponent } from './conclusiebeleid.component';

const routes: Routes = [
  { path:'conclusiebeleid', component: ConclusiebeleidComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConclusiebeleidRoutingModule { }
