import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IJokeModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private _favouriteJokes$: BehaviorSubject<IJokeModel[]> = new BehaviorSubject([]);
  private _favouriteJokes: IJokeModel[] = [];

  constructor() { }

  public addFavouriteJoke(newJoke: IJokeModel) {
    const existingJokeIdx = this._favouriteJokes.findIndex((j) => j.id === newJoke.id);
    if (existingJokeIdx > -1) {
      return;
    }

    this._favouriteJokes.push(newJoke);
    this._favouriteJokes$.next([...this._favouriteJokes])
  }

  public getFavouriteJokes(): BehaviorSubject<IJokeModel[]> {
    return this._favouriteJokes$;
  }
}
