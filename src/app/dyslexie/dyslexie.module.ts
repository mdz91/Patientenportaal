import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { DyslexieRoutingModule } from './dyslexie-routing.module';
import { DyslexieComponent } from './dyslexie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    DyslexieComponent
  ],
  imports: [
    CommonModule,
    DyslexieRoutingModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
    ReactiveFormsModule,
  ]
})
export class DyslexieModule { }
