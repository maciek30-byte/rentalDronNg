import { Component, Input } from '@angular/core';
import { DroneItem } from '../../interfaces/drone.interface';

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() drone!: DroneItem;

  onShowMore() {

  }
}
