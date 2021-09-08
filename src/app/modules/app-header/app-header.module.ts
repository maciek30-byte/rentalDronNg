import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHeaderComponent } from './app-header.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    AppHeaderComponent,
  ],
  bootstrap: [AppHeaderComponent],
})
export class AppHeaderModule {
}
