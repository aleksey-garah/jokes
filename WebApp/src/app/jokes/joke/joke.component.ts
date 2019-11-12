import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IJokeModel } from '../../shared/models';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  @Input() public set joke(value: IJokeModel) {
    if (value) {
      this._joke = value;
    }
  }
  public get joke(): IJokeModel {
    return this._joke;
  }

  @Output() public onLikeClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onSkipClicked: EventEmitter<string> = new EventEmitter<string>();

  private _joke: IJokeModel = null;

  constructor() { }

  public ngOnInit() {
  }

  public onLikeClick() {
    this.onLikeClicked.emit(this._joke.id);
  }

  public onSkipClick() {
    this.onSkipClicked.emit(this._joke.id);
  }

}
