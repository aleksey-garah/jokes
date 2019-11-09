import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JokesComponent } from './jokes/jokes.component';


const routes: Routes = [
  {
    path: 'jokes',
    component: JokesComponent,
  },
  {
    path: 'favourite-jokes',
    loadChildren: () => import('./favourite-jokes/favourite-jokes.module').then(m => m.FavouriteJokesModule)},
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
