import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DroneItem } from '../../interfaces/drone.interface';
import { FormBuilder, Validators } from '@angular/forms';
import { RentConfirmationComponent } from '../rent-confirmation/rent-confirmation.component';

@Component({
  selector: 'item-rent',
  templateUrl: './item-rent.component.html',
  styleUrls: ['./item-rent.component.scss'],
})
export class ItemRentComponent {

  public rentForm = this.formBuilder.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required], //todo: add email validation
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
  });
  private _newPrice = 0;

  constructor(
    private readonly formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ItemRentComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public drone: DroneItem) {
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
    const dialogRef = this.dialog.open(RentConfirmationComponent, {
      width: '500px',
      data: { form: this.rentForm.value, drone: { ...this.drone, price: this._newPrice } },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The rent confirmation was closed', result);
    });
  }
}
