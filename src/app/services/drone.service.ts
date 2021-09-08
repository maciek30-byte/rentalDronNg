import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DroneService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getDrones() {
    return this.httpClient.get('./assets/database/droneList.json');
  }
}
