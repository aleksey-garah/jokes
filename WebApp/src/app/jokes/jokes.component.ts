import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ApiService, JokesService } from '../shared/services';
import { IJokeModel } from '../shared/models';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  public randomJoke$: Observable<IJokeModel>;

  constructor(private apiService: ApiService, private router: Router, private jokeService: JokesService) {
    this.randomJoke$ = this.apiService.fetchRandomJoke();
  }

  public ngOnInit() {}

  public onLikeClicked(joke: IJokeModel) {
    this.jokeService.addFavouriteJoke(joke);
    this.router.navigate(['/favourite-jokes']);
  }

  public onSkipClicked(joke: IJokeModel) {
    this.randomJoke$ = this.apiService.fetchRandomJoke();
  }
}
