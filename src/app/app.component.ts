import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isModalOpen = false;

  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(CreateCustomerComponent);
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
