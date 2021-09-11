import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

import { DroneItem } from '../../interfaces/drone.interface';
import { RentConfirmationComponent } from '../rent-confirmation/rent-confirmation.component';

@Component({
  selector: 'item-rent',
  templateUrl: './item-rent.component.html',
  styleUrls: ['./item-rent.component.scss'],
})
export class ItemRentComponent {
  private _newPrice = 0;
  private _startDate = new Date();
  private _endDate = new Date(this._startDate.getTime() + 86400000);
  public rentForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    startDate: [this._startDate, Validators.required],
    endDate: [this._endDate, Validators.required],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ItemRentComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public drone: DroneItem) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.rentForm.controls;
  }

  public estimatedPrice(start: Date, end: Date) {
    // @ts-ignore
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    this._newPrice = diffDays * this.drone.price;
    return this._newPrice;
  }

  onConfirm() {
    this.dialogRef.close();
    this.dialog.open(RentConfirmationComponent, {
      width: '500px',
      data: { form: this.rentForm.value, drone: { ...this.drone, price: this._newPrice } },
    });

  }
}
