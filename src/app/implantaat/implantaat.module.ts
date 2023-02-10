import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImplantaatRoutingModule } from './implantaat-routing.module';
import { ImplantaatComponent } from './implantaat.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ImplantaatComponent
  ],
  imports: [
    CommonModule,
    ImplantaatRoutingModule,
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
export class ImplantaatModule { }
