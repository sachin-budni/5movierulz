import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Movies } from '../service/movie';
import { MovieService } from '../service/movie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  $movieList: Observable<Movies[]> = of([]);
  page: number = 0;
  constructor(private mvService: MovieService,
    private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const { language, page }: any = this.route.snapshot.queryParams;
    if (language) {
      this.page = page || 1;
      this.$movieList = this.mvService.getMoviesByLang(language, this.page)
      .pipe(map((val: any) => val.data));
    } else {
      this.$movieList = this.mvService.getMovies()
      .pipe(map((val: any) => val.data));
    }
  }

  pageChange(page?: number): any {
    const { language }: any = this.route.snapshot.queryParams;
    if (language) {
      this.page = Number(page);
      this.router.navigate(['/movies'], { queryParams: { language : language, page: Number(this.page) } });
      this.$movieList = this.mvService.getMoviesByLang(language, this.page)
      .pipe(map((val: any) => val.data));
    } else {
      this.$movieList = this.mvService.getMovies()
      .pipe(map((val: any) => val.data));
    }
  }
  onLanguageChange(language: string): any {
    if (language) {
      this.page = 1;
      this.$movieList = this.mvService.getMoviesByLang(language, this.page)
      .pipe(map((val: any) => val.data));
    } else {
      this.$movieList = this.mvService.getMovies()
      .pipe(map((val: any) => val.data));
    }
  }

}
