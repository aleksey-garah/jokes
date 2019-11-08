import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServer: string;

  constructor(private http: HttpClient, protected config: AppConfigService) {
    this.apiServer = config.apiServer;
  }

  // TODO add error handling
  public fetchRandomJoke(): Observable<any> {
    let url = this.apiServer + '/jokes/random';

    return this.http.get(url);
  }
}
