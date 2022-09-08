import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { PriceSummaryComponent } from './price-summary/price-summary.component';
import { SideSectionComponent } from './side-section/side-section.component';
import { LinksComponent } from './links/links.component';
import { BookingComponent } from './booking/booking.component';
import { NotificationComponent } from './notification/notification.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentFormComponent,
    PriceSummaryComponent,
    SideSectionComponent,
    LinksComponent,
    BookingComponent,
    NotificationComponent,
    DriverDetailsComponent,
    PaymentDetailsComponent,
    TabsComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
