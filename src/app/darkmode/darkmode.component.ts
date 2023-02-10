import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {
  darkModeControl = new FormControl(false);
  darkTheme: boolean = false;
  @HostBinding('class') darkClassName = '';


  constructor(private overlayContainer: OverlayContainer) { }

  ngOnInit(): void {
    this.darkBackground();
    this.darkTheme = localStorage.getItem('theme') === "darkMode" ? true : false;
  }

  darkBackground() {
    const bodyElement = document.body;
    this.darkModeControl.valueChanges.subscribe((val) => {
      const darkMode = "darkMode";
      this.darkClassName = val ? darkMode : '';
      localStorage.setItem('theme', this.darkClassName);
      if (val) {
        bodyElement.classList.add(darkMode);
        this.overlayContainer.getContainerElement().classList.add(darkMode);
      } else {
        bodyElement.classList.remove(darkMode);
        this.overlayContainer.getContainerElement().classList.remove(darkMode);
      }

    })
  }
}
