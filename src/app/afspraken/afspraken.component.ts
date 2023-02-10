import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
export interface AfspraakElement {
  dag: string; 
  datum: string; 
  afspraak: string;
  type: string; 
  arts: string; 
}

const ELEMENT_DATA: AfspraakElement[] = [
  {dag: "Maandag", datum: "10-10-2022", afspraak: "Controle", type: "Polikliniek", arts: "Dr. T.P. van der Heide"},
  {dag: "Dinsdag", datum: "12-04-2022", afspraak: "Fysiotherapie", type: "Telefonisch",  arts: "Dr. T.P. van der Heide"},
];

@Component({
  selector: 'app-afspraken',
  templateUrl: './afspraken.component.html',
  styleUrls: ['./afspraken.component.css']
})



export class AfsprakenComponent implements OnInit {
    displayedColumns: string[] = ['dag','datum','afspraak','type','arts']
    dataSource = ELEMENT_DATA;
    clickedRows = new Set<AfspraakElement>();
  constructor() { }

 afspraakToevoegen() {
 
} 

  afspraakWijzigen() {

  }

  afspraakVerwijderen() {

  }

  ngOnInit(): void {
  }

}
