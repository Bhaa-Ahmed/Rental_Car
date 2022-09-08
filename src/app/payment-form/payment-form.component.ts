import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css'],
})
export class PaymentFormComponent implements OnInit {
  paymentForm = new FormGroup({
    name: new FormControl(''),
    cardNumber: new FormControl('', [
      Validators.maxLength(16),
      Validators.minLength(16),
    ]),
    expiryDate: new FormControl(''),
    securityNumber: new FormControl(''),
  });

  ngOnInit(): void {}
}
