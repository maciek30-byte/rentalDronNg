import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneItem, RentingForm } from '../../interfaces/drone.interface';

@Component({
  selector: 'rent-confirmation',
  templateUrl: './rent-confirmation.component.html',
  styleUrls: ['./rent-confirmation.component.scss'],
})
export class RentConfirmationComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { form: RentingForm, drone: DroneItem }) {
  }
}
