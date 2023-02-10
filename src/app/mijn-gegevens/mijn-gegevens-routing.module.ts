import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MijnGegevensComponent } from './mijn-gegevens.component';

const routes: Routes = [
  { path:'mijn-gegevens', component: MijnGegevensComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MijnGegevensRoutingModule { }
