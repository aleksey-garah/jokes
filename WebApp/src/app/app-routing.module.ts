import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
  {
    path: 'jokes',
    component: JokesComponent,
  },
  {
    path: 'liked-jokes',
    loadChildren: () => import('./liked-jokes/liked-jokes.module').then(m => m.LikedJokesModule)},
  {
    path: '**',
    redirectTo: 'jokes',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
