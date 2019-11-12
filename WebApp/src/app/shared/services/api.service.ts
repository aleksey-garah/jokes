import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AppConfigService } from './app-config.service';
import { IJokeModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServer: string;

  constructor(private http: HttpClient, protected config: AppConfigService) {
    this.apiServer = config.apiServer;
  }

  public fetchRandomJoke(): Observable<IJokeModel> {
    const url = this.apiServer + '/jokes/random';

    return this.http.get<IJokeModel>(url).pipe(map((res) => res), catchError((err) =>  {
      console.error(new Error('Error on getting Joke!!!'));
      return EMPTY;
    }));
  }
}
