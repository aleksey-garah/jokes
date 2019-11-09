import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IJokeModel } from '../shared/models';
import { JokesService } from '../shared/services';

@Component({
  selector: 'app-favourite-jokes',
  templateUrl: './favourite-jokes.component.html',
  styleUrls: ['./favourite-jokes.component.scss']
})
export class FavouriteJokesComponent implements OnInit {
  public favouriteJokes$: BehaviorSubject<IJokeModel[]>;

  constructor(private jokeService: JokesService) {
    this.favouriteJokes$ = this.jokeService.getFavouriteJokes();
  }

  ngOnInit() {
  }

}
