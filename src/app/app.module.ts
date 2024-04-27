import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AddPinComponent } from './pins/add-pin/add-pin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PinsModule } from './pins/pins.module';
import { ListPinsComponent } from './pins/list-pins/list-pins.component';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    AddPinComponent,
    ListPinsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
