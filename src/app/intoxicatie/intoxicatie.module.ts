import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntoxicatieRoutingModule } from './intoxicatie-routing.module';
import { IntoxicatieComponent } from './intoxicatie.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    IntoxicatieComponent
  ],
  imports: [
    CommonModule,
    IntoxicatieRoutingModule,
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
export class IntoxicatieModule { }
