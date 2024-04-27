import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PinService } from '../../services/pin.service';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrl: './add-pin.component.css',
})
export class AddPinComponent implements OnInit {
  @ViewChild('f')
  addPinForm!: NgForm;

  customers: any[] = [];
  collaboratorsSelected: any[] = [];
  public ngxValue: any = [];
  public ngxDisabled = false;

  constructor(
    private activeModal: NgbActiveModal,
    private pinService: PinService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers().map((customer) => {
      return customer.title;
    });
  }

  onSubmit() {
    const pin = this.addPinForm.value;
    this.pinService.createPin(pin);
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }
}
