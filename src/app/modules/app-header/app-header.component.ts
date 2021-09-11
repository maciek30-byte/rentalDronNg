import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemInfoComponent } from '../../components/item-info/item-info.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  @Output() onSearchPhrase = new EventEmitter;

  constructor(public dialog: MatDialog) {
  }

  onShowInfo() {
    this.dialog.open(ItemInfoComponent, {
      width: '500px',
    });
  }
}
