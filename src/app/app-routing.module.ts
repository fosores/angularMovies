import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsComponent } from './views/tickets/tickets.component';
import { MoviesComponent } from './views/movies/movies.component';
import { SignbookComponent } from './components/signbook/signbook.component';


const routes: Routes = [
  {path: 'movies', component: MoviesComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'sign', component: SignbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
