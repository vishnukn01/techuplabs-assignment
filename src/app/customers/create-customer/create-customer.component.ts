import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
})
export class CreateCustomerComponent {
  constructor(private activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close('Modal closed');
  }
}
