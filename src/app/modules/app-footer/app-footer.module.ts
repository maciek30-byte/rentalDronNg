import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppFooterComponent } from './app-footer.component';

@NgModule({
  declarations: [
    AppFooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    AppFooterComponent,
  ],
  bootstrap: [AppFooterComponent],
})
export class AppFooterModule {
}
