import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationService } from '../../services/location.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
})
export class CreateCustomerComponent implements OnInit, OnDestroy {
  @ViewChild('f')
  createCustomerForm!: NgForm;
  countries: any;
  regions: any;
  getCountriesSubscription!: Subscription;

  constructor(
    private activeModal: NgbActiveModal,
    private locationService: LocationService,
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.getCountriesSubscription = this.locationService
      .getCountriesData()
      .subscribe((response) => {
        const formattedCountries = [];
        const formattedRegions: any[] = [];
        for (const countryCode in response.data) {
          const countryDetails = response.data[countryCode];
          formattedCountries.push([
            countryCode,
            countryDetails.country,
            countryDetails.region,
          ]);
          formattedRegions.push(countryDetails.region);
        }
        // Get unique values
        this.regions = formattedRegions.filter(
          (region, index) => formattedRegions.indexOf(region) === index
        );
        this.countries = formattedCountries;
      });
  }

  onSubmit() {
    const customer = this.createCustomerForm.value;
    this.customerService.createCustomer(customer);
    this.activeModal.close();
  }

  close() {
    this.activeModal.close();
  }

  ngOnDestroy(): void {
    this.getCountriesSubscription.unsubscribe();
  }
}
