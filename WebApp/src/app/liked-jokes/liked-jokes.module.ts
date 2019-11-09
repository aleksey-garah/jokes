import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LikedJokesComponent } from './liked-jokes.component';

@NgModule({
  declarations: [LikedJokesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LikedJokesComponent,
      },
    ]),
  ]
})
export class LikedJokesModule { }
