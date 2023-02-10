import { LiveAnnouncer } from '@angular/cdk/a11y';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AfterViewInit, Component, HostBinding, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AfspraakElement } from './afspraken/afspraken.component';

const ELEMENT_DATA: AfspraakElement[] = [
  { dag: "Maandag", datum: "10-10-2022", afspraak: "Controle", type: "Polikliniek", arts: "Dr. T.P. van der Heide" },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['dag', 'datum', 'afspraak', 'arts'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<AfspraakElement>();

  fontControl = new FormControl(false);
  darkModeControl = new FormControl(false);
  darkTheme: boolean = false;
  dyslexia: boolean = false;
  @HostBinding('class.openDyslexic') className = '';
  @HostBinding('class.darkMode') darkClassName = '';
  languageArray: string[] = ['ar', 'en-US','en','es','fr','it', 'ja', 'nl', 'pt','tr'];
  found: any = this.languageArray.find(element => element == window.navigator.language);
  defaultSelect: any = typeof this.found !== 'undefined' ? this.found : 'nl';
  constructor(public translateService: TranslateService, private overlayContainer: OverlayContainer, private liveAnnouncer: LiveAnnouncer) {
    liveAnnouncer.announce("Hey Google");
  }


  ngOnInit(): void {
    this.dyslexiaMode();
    this.darkBackground();
    this.selectLanguage(this.defaultSelect);
    this.darkTheme = localStorage.getItem('theme') === "darkMode" ? true : false;
    this.dyslexia = localStorage.getItem('dyslexia') === "openDyslexic" ? true : false;
   
  }

  selectLanguage(lang: string) {
    document.documentElement.setAttribute("dir", (lang == "ar" ? "rtl" : "ltr"));
    document.documentElement.setAttribute("lang", lang);
    this.translateService.use(lang);
    localStorage.setItem('lang', lang);
    
  }

  dyslexiaMode() {
    const openDyslexic = 'openDyslexic';
    this.fontControl.valueChanges.subscribe((val) => {
      const dyslexic = this.className = val ? openDyslexic : '';
      localStorage.setItem('dyslexia', dyslexic);

    })
  }

  darkBackground() {
    const bodyElement = document.body;
    this.darkModeControl.valueChanges.subscribe((val) => {
      const darkMode = "darkMode";
      this.darkClassName = val ? darkMode : '';
      localStorage.setItem('theme', this.darkClassName);
      if (val) {
        this.overlayContainer.getContainerElement().classList.add(darkMode);
        bodyElement.classList.add(darkMode);
      } else {
        this.overlayContainer.getContainerElement().classList.remove(darkMode);
        bodyElement.classList.remove(darkMode);
      }
    })
  }
}
