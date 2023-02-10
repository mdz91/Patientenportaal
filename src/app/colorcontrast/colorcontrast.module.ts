import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';

import { ColorcontrastRoutingModule } from './colorcontrast-routing.module';
import { ColorcontrastComponent } from './colorcontrast.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    ColorcontrastComponent
  ],
  imports: [
    CommonModule,
    ColorcontrastRoutingModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
  ]
})
export class ColorcontrastModule { }
