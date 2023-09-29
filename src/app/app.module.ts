import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { MoviesComponent } from './views/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryComponent } from './components/country/country.component';
import { SignbookComponent } from './components/signbook/signbook.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieCardComponent,
    TicketsComponent,
    MoviesComponent,
    CountryComponent,
    SignbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
