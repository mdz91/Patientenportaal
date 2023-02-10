import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiagnoseRoutingModule } from './diagnose-routing.module';
import { DiagnoseComponent } from './diagnose.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    DiagnoseComponent
  ],
  imports: [
    CommonModule,
    DiagnoseRoutingModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl-NL',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
  ]
})
export class DiagnoseModule { }
