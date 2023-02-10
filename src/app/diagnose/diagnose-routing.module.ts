import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiagnoseComponent } from './diagnose.component';

const routes: Routes = [
{ path:'diagnose', component: DiagnoseComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiagnoseRoutingModule { }
