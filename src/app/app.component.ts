import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AddPinComponent } from './pins/add-pin/add-pin.component';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isCustomerModalOpen = false;
  isAddPinModalOpen = false;
  customerCreated: boolean = false;
  dismissAlert = false;

  constructor(
    private modalService: NgbModal,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customerService.customerCreated$.subscribe((data) => {
      this.customerCreated = data;
    });
  }

  closeAlert() {
    this.dismissAlert = true;
  }

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
