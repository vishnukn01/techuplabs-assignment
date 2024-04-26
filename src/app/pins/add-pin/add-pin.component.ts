import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-pin',
  templateUrl: './add-pin.component.html',
  styleUrl: './add-pin.component.css',
})
export class AddPinComponent {
  constructor(private activeModal: NgbActiveModal) {}

  close() {
    this.activeModal.close('Modal closed');
  }
}
