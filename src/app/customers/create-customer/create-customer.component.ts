import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationService } from '../../services/location.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css',
})
export class CreateCustomerComponent implements OnInit {
  @ViewChild('f')
  createCustomerForm!: NgForm;
  countries: any;
  regions: any;

  constructor(
    private activeModal: NgbActiveModal,
    private locationService: LocationService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.locationService.getCountriesData().subscribe((response) => {
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
      this.activeModal.close();
      console.log('Customer created successfully');
    } catch (error) {
      console.error('Error saving customer data to localStorage:', error);
    }
  }

  close() {
    this.activeModal.close();
  }
}
