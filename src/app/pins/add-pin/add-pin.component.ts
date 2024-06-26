import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { PinService } from '../../services/pin.service';
import { CustomerService } from '../../services/customer.service';
import { FileUploader } from 'ng2-file-upload';
import { AppConfig } from '../../config/constants';

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

  uploader: FileUploader = new FileUploader({
    url: AppConfig.URL,
    autoUpload: true,
  });
  hasBaseDropZoneOver: boolean;
  hasAnotherDropZoneOver: boolean;
  response: string[] = [];

  uploadedImages: string[] = [];
  constructor(
    private activeModal: NgbActiveModal,
    private pinService: PinService,
    private customerService: CustomerService
  ) {
    this.hasBaseDropZoneOver = true;
    this.hasAnotherDropZoneOver = false;

    this.uploader.response.subscribe((res: string) => {
      const respObj: string[] = JSON.parse(res);
      respObj.map((x) => this.uploadedImages.push(AppConfig.imageBaseUrl + x));
      this.response = respObj;
    });
  }

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

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileDropBase(e: any): void {
    this.hasBaseDropZoneOver = e;
    this.uploader.uploadAll();
  }

  close() {
    this.activeModal.close();
  }
}
