import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { Observable, map, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, Movies } from '../service/movie';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {
  searchForm =new FormControl<Movies | null>(null);
  $movieList: Observable<Movies[]> = of([]);
  langs = ["telugu", "hindi", "tamil", "malayalam", "english"];
  @Output() handleLanguage = new EventEmitter();
  constructor(private mvService: MovieService,
    private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit(): any {
    this.searchForm.valueChanges
    .subscribe((val: any) => {
      if (typeof val === 'string') {
        this.$movieList = this.mvService.searchMovies(val).pipe(map((val: any) => val.data));
      }
    })
  }

  onSearch(val: Movies | null) {
    this.router.navigate(['/movie'], { queryParams: { url: val?.link } });
  }
  onClick(lang: string) {
    this.router.navigate(['/movies'], { queryParams: { language : lang, page: 1 } });
    this.handleLanguage.emit(lang);
  }
  displayFn(val: Movies) {
    return val && val.title ? val.title : '';
  }
}
