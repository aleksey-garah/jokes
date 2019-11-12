import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FavouriteJokesComponent } from './favourite-jokes.component';
import { SharedModule } from '../shared/shared.module';
import { FavouriteJokeComponent } from './favourite-joke/favourite-joke.component';

@NgModule({
  declarations: [FavouriteJokesComponent, FavouriteJokeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavouriteJokesComponent,
      },
    ]),
    SharedModule.forRoot()
  ]
})
export class FavouriteJokesModule { }
