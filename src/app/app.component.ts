import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AddPinComponent } from './pins/add-pin/add-pin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isCustomerModalOpen = false;
  isAddPinModalOpen = false;

  constructor(private modalService: NgbModal) {}

  openCustomerModal() {
    this.modalService.open(CreateCustomerComponent);
  }

  closeCustomerModal() {
    this.isCustomerModalOpen = false;
  }

  openAddPinModal() {
    this.modalService.open(AddPinComponent);
  }

  closeAddPinModal() {
    this.isAddPinModalOpen = false;
  }
}
