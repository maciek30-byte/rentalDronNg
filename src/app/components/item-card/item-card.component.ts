import { Component, Input } from '@angular/core';
import { DroneItem } from '../../interfaces/drone.interface';
import { MatDialog } from '@angular/material/dialog';
import { ItemDetailsComponent } from '../item-details/item-details.component';

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
    const dialogRef = this.dialog.open(ItemDetailsComponent, {
      width: '500px',
      data: this.drone,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
