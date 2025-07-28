import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: 'movies', component: MovielistComponent },
  { path: 'movie', component: MovieComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
