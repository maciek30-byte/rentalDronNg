import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneItem, RentingForm } from '../../interfaces/drone.interface';

@Component({
  selector: 'rent-confirmation',
  templateUrl: './rent-confirmation.component.html',
  styleUrls: ['./rent-confirmation.component.scss'],
})
export class RentConfirmationComponent {

  public randomCode: string = btoa(Math.random().toString()).slice(0, 12);

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { form: RentingForm, drone: DroneItem }) {
  }
}
