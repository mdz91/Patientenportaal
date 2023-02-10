import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessibilityComponent } from './accessibility.component';

const routes: Routes = [
  {path: 'toegankelijkheid', component: AccessibilityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessibilityRoutingModule { }
