import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';
import { Pin } from '../models/pin';
import { LocalStorageService } from './local-storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  pins$ = new Subject<Pin[]>();

  constructor(
    private customerService: CustomerService,
    private localStorageService: LocalStorageService
  ) {}

  createPin(pin: Pin) {
    const existingPins: Pin[] = this.listPins();
    existingPins.push(pin);

    try {
      this.localStorageService.set('pins', JSON.stringify(existingPins));
      // Create an observable which the pins table can subscribe to
      this.pins$.next(existingPins);
    } catch (error) {
      console.error('Error saving pin data to localStorage:', error);
    }
  }

  listPins(): Pin[] {
    let existingPins: Pin[] = [];
    try {
      const localStorageData = this.localStorageService.get('pins');
      if (localStorageData) {
        existingPins = JSON.parse(localStorageData);
      }
    } catch (error) {
      console.error('Error retrieving pins from localStorage:', error);
    }
    return existingPins;
  }
}
