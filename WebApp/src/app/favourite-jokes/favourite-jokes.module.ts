import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavouriteJokesComponent } from './favourite-jokes.component';

@NgModule({
  declarations: [FavouriteJokesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FavouriteJokesComponent,
      },
    ])
  ]
})
export class FavouriteJokesModule { }
