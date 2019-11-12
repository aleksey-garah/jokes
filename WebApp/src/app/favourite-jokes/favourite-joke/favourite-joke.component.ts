import { Component, Input, OnInit } from '@angular/core';
import { IJokeModel } from '../../shared/models';

@Component({
  selector: 'app-favourite-joke',
  templateUrl: './favourite-joke.component.html',
  styleUrls: ['./favourite-joke.component.scss']
})
export class FavouriteJokeComponent implements OnInit {

  @Input() public set joke(value: IJokeModel) {
    if (value) {
      this._joke = value;
    }
  }
  public get joke(): IJokeModel {
    return this._joke;
  }

  private _joke: IJokeModel = null;

  constructor() { }

  public ngOnInit() {
  }

}
