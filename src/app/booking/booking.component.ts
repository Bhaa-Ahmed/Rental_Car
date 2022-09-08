import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  carDetailVisibility = false;
  dropdownVisibility = false;

  constructor() {}

  ngOnInit(): void {}

  toggleDetail() {
    this.carDetailVisibility = !this.carDetailVisibility;
  }

  toggleDropdown() {
    this.dropdownVisibility = !this.dropdownVisibility;
  }
}
