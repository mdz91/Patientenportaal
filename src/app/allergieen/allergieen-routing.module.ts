import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergieenComponent } from './allergieen.component';

const routes: Routes = [
  { path:'allergieen', component: AllergieenComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllergieenRoutingModule { }
