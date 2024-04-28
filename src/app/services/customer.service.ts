import { Injectable } from '@angular/core';
import { Customers } from '../models/customers';
import { LocalStorageService } from './local-storage.service';
import { Customer } from '../models/customer';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  customerCreated$: Subject<boolean> = new Subject<boolean>();

  constructor(private localStorageService: LocalStorageService) {}

  createCustomer(customer: Customer): void {
    let existingCustomers: any[] = [];
    try {
      const localStorageData = this.localStorageService.get('customers');
      if (localStorageData) {
        existingCustomers = JSON.parse(localStorageData);
      }
    } catch (error) {
      console.error('Error retrieving customers from localStorage:', error);
    }

    existingCustomers.push(customer);

    try {
      this.localStorageService.set(
        'customers',
        JSON.stringify(existingCustomers)
      );
      this.customerCreated$.next(true);
    } catch (error) {
      console.error('Error saving customer data to localStorage:', error);
    }
  }

  getCustomers(): Customer[] {
    const localStorageData = this.localStorageService.get('customers');
    let result: Customer[] = [];
    if (localStorageData) {
      try {
        result = JSON.parse(localStorageData);
      } catch (error) {
        console.error('Error parsing customer data from localStorage:', error);
      }
    }
    return result;
  }
}
