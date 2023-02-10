import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErfelijkComponent } from './erfelijk.component';

const routes: Routes = [
  { path:'erfelijk', component: ErfelijkComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErfelijkRoutingModule { }
