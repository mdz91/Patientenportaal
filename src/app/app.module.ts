import { A11yModule } from '@angular/cdk/a11y';
import { AfsprakenModule } from './afspraken/afspraken.module';
import { AllergieenModule } from './allergieen/allergieen.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BehandelbeperkingModule } from './behandelbeperking/behandelbeperking.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ConclusiebeleidModule } from './conclusiebeleid/conclusiebeleid.module';
import { CorrespondentieModule } from './correspondentie/correspondentie.module';
import { DiagnoseModule } from './diagnose/diagnose.module';
import { DossierModule } from './dossier/dossier.module';
import { EConsultModule } from './e-consult/e-consult.module';
import { ErfelijkModule } from './erfelijk/erfelijk.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DarkmodeModule } from './darkmode/darkmode.module';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImplantaatModule } from './implantaat/implantaat.module';
import { IntoxicatieModule } from './intoxicatie/intoxicatie.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MedicatieModule } from './medicatie/medicatie.module';
import { MijnGegevensModule } from './mijn-gegevens/mijn-gegevens.module';
import { NgModule } from '@angular/core';
import { OpnamesModule } from './opnames/opnames.module';
import { PatientenvoorlichtingModule } from './patientenvoorlichting/patientenvoorlichting.module';
import { TakenModule } from './taken/taken.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { UitslagModule } from './uitslag/uitslag.module';
import { VoorgeschiedenisModule } from './voorgeschiedenis/voorgeschiedenis.module';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); 
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    A11yModule,
    BrowserModule,
    AppRoutingModule, 
    MijnGegevensModule,
    DarkmodeModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatGridListModule,
    DossierModule,
    AfsprakenModule,
    HomeModule,
    MedicatieModule,
    AllergieenModule,
    ConclusiebeleidModule,
    BehandelbeperkingModule,
    ImplantaatModule,
    ErfelijkModule,
    IntoxicatieModule,
    CorrespondentieModule,
    VoorgeschiedenisModule,
    UitslagModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    OpnamesModule,
    TakenModule,
    PatientenvoorlichtingModule,
    EConsultModule,
    DiagnoseModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatDividerModule,
    HttpClientModule,
    TranslateModule.forRoot({ 
      defaultLanguage: 'nl',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }  
    }),
    MatSliderModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
