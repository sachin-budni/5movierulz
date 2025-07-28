import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieComponent } from './movie/movie.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeDirective } from './service/theme.directive';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatCardModule
];
@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    MovieComponent,
    MovieSearchComponent,
    ThemeDirective,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
