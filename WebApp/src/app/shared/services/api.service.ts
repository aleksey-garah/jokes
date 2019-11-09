import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
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

  // TODO add error handling
  public fetchRandomJoke(): Observable<IJokeModel> {
    let url = this.apiServer + '/jokes/random';

    return this.http.get<IJokeModel>(url);
  }
}
