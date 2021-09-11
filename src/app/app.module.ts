import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppHeaderModule } from './modules/app-header/app-header.module';
import { AppFooterModule } from './modules/app-footer/app-footer.module';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemRentComponent } from './components/item-rent/item-rent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RentConfirmationComponent } from './components/rent-confirmation/rent-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemDetailsComponent,
    ItemRentComponent,
    RentConfirmationComponent,
  ],
  entryComponents: [
    ItemDetailsComponent,
    ItemRentComponent,
    RentConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppHeaderModule,
    AppFooterModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
