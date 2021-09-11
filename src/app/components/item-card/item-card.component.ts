import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DroneItem } from '../../interfaces/drone.interface';
import { ItemDetailsComponent } from '../item-details/item-details.component';
import { ItemRentComponent } from '../item-rent/item-rent.component';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() drone!: DroneItem;

  constructor(public dialog: MatDialog) {
  }

  onShowMore() {
    this.dialog.open(ItemDetailsComponent, {
      width: '700px',
      data: this.drone,
    });
  }

  onRent() {
    this.dialog.open(ItemRentComponent, {
      width: '500px',
      data: this.drone,
    });
  }
}
