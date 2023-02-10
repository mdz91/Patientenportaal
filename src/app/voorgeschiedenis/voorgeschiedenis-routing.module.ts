import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoorgeschiedenisComponent } from './voorgeschiedenis.component';

const routes: Routes = [
  {path: "voorgeschiedenis", component: VoorgeschiedenisComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoorgeschiedenisRoutingModule { }
