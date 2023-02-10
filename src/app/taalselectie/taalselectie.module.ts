import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule} from '@angular/material/button';

import { TaalselectieRoutingModule } from './taalselectie-routing.module';
import { TaalselectieComponent } from './taalselectie.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TaalselectieComponent
  ],
  imports: [
    CommonModule,
    TaalselectieRoutingModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
    MatButtonModule,
  ]
})
export class TaalselectieModule { }
