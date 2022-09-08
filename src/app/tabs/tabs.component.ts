import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  mapActive = true;
  hoursActive = false;

  constructor() {}

  ngOnInit(): void {}

  activateMap() {
    this.mapActive = true;
    this.hoursActive = false;
  }
  activateHours() {
    this.mapActive = false;
    this.hoursActive = true;
  }
}
