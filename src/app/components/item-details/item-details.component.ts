import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DroneItem } from '../../interfaces/drone.interface';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DroneItem) {
  }

}
