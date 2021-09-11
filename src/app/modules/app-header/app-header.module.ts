import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeaderComponent } from './app-header.component';
import { SearchComponent } from '../../components/search/search.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppHeaderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [
    AppHeaderComponent,
  ],
  bootstrap: [AppHeaderComponent],
})
export class AppHeaderModule {
}
