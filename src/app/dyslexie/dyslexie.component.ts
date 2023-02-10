import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dyslexie',
  templateUrl: './dyslexie.component.html',
  styleUrls: ['./dyslexie.component.css']
})
export class DyslexieComponent implements OnInit {
  fontControl = new FormControl(false);
  dyslexia: boolean = false;
  @HostBinding('class') className = '';
 
 
  constructor() { }

  ngOnInit(): void {
   this.dyslexia = localStorage.getItem('dyslexia') === "openDyslexic" ? true : false;
    this.dyslexiaMode();
    
 
   
  }

  dyslexiaMode() {
    const openDyslexic = 'openDyslexic';
    this.fontControl.valueChanges.subscribe((val) => {
    const dyslexic = this.className = val ? openDyslexic : '';
     localStorage.setItem('dyslexia', dyslexic);
      
    })
  }


  

}
