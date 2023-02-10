import { AccessibilityModule } from '../accessibility/accessibility.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { ColorcontrastModule } from '../colorcontrast/colorcontrast.module';
import { HomeRoutingModule } from './home-routing.module';
import { DarkmodeModule } from '../darkmode/darkmode.module';
import { DyslexieModule } from '../dyslexie/dyslexie.module';
import { TaalselectieModule } from '../taalselectie/taalselectie.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AccessibilityModule,
    CommonModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
    DyslexieModule,
    HomeRoutingModule,
    ColorcontrastModule,
    MatGridListModule,
    MatIconModule,
    DarkmodeModule,
    MatButtonModule,
    MatCardModule,
    TaalselectieModule,
  ]
})
export class HomeModule { }
