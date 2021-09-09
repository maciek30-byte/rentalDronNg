import { Component } from '@angular/core';
import { DroneService } from './services/drone.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public droneList$: Observable<any>;

  constructor(private readonly droneService: DroneService) {
    this.droneList$ = this.droneService.getDrones();
  }

  onSearchPhrase(searchPhrase: string) {
    this.droneList$ = this.droneService.getDrones(searchPhrase);
  }
}
