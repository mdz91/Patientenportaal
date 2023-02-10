import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorcontrastComponent } from './colorcontrast.component';

const routes: Routes = [
  {path: "kleurcontrast", component: ColorcontrastComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorcontrastRoutingModule { }
