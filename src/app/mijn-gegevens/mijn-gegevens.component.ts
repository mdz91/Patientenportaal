import { Component } from '@angular/core';

@Component({
  selector: 'app-mijn-gegevens',
  templateUrl: './mijn-gegevens.component.html',
  styleUrls: ['./mijn-gegevens.component.scss']
})
export class MijnGegevensComponent {
   changeLang: boolean = false;

  ngOnInit() : void {
   
  }
  changeLanguage() {
    this.changeLang = !this.changeLang;

   }
  

}
