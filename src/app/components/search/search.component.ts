import { Component, EventEmitter, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'search-input',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onSearchPhrase = new EventEmitter;
  public searchPhrase: string = '';
  private debounce$: Subject<string> = new Subject<string>();

  constructor() {
    this.debounce$.pipe(
      debounceTime(1000),
    ).subscribe((value) => {
      this.onSearchPhrase.emit(value);
    });
  }

  onModelChange(searchPhrase: string) {
    this.debounce$.next(searchPhrase);
  }

}
