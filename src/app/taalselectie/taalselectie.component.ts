import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-taalselectie',
  templateUrl: './taalselectie.component.html',
  styleUrls: ['./taalselectie.component.css']
})
export class TaalselectieComponent implements OnInit {
  languageArray: string[] = ['ar', 'en-US','en','es','fr','it', 'ja', 'nl', 'pt','tr'];
  found: any = this.languageArray.find(element => element == window.navigator.language);
  defaultSelect: any = typeof this.found !== 'undefined' ? this.found : 'nl';
 dir: string = "rtl" || "ltr";
  constructor(public translateService: TranslateService) { }

  ngOnInit(): void {
    this.selectLanguage(this.defaultSelect);
  }

  selectLanguage(lang: string) {
    document.documentElement.setAttribute("dir", (lang == "ar" ? "rtl" : "ltr"));
    document.documentElement.setAttribute("lang", lang);
    this.translateService.use(lang);
 }
}
