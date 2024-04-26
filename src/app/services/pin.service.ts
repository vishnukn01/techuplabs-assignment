import { Injectable } from '@angular/core';
import { CustomerService } from './customer.service';

@Injectable({
  providedIn: 'root',
})
export class PinService {
  constructor(private customerService: CustomerService) {}
}
