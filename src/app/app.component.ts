import { Component } from '@angular/core';
import { DroneService } from './services/drone.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public droneList$: Observable<any>;

  constructor(private readonly droneService: DroneService) {
    // @ts-ignore
    this.droneList$ = this.droneService.getDrones().pipe(map((d) => d.items));
  }
}
