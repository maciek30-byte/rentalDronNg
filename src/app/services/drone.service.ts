import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DroneService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getDrones(searchPhrase?: string) {
    return this.httpClient
      .get('./assets/database/droneList.json')
      .pipe(
        map((res: any) => {
          if (searchPhrase) {
            return res.items.filter((item: any) => item.name.search(searchPhrase) !== -1);
          } else return res.items;
        }),
      );
  }
}
