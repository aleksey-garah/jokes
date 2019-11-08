import { Component } from '@angular/core';
import { ApiService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Jokes App';
  constructor(private apiService: ApiService) {
    this.apiService.fetchRandomJoke().subscribe((res) => {
      console.log('Success');
      console.log(res);
    })
  }
}
