import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DyslexieComponent } from './dyslexie.component';

const routes: Routes = [
  {path: 'dyslexie' , component: DyslexieComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DyslexieRoutingModule { }
