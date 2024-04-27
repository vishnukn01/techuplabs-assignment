import { Component } from '@angular/core';
import { PinService } from '../../services/pin.service';
import { Pin } from '../../models/pin';

@Component({
  selector: 'app-list-pins',
  templateUrl: './list-pins.component.html',
  styleUrl: './list-pins.component.css',
})
export class ListPinsComponent {
  pins: Pin[] = [];
  constructor(private pinService: PinService) {}

  ngOnInit() {
    this.pins = this.pinService.listPins();
    this.pinService.pins$.subscribe((pins) => {
      this.pins = pins;
    });
  }
}
