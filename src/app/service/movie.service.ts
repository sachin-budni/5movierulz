import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie, Movies } from './movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  API = "https://movierulz.vercel.app";
  private activeThem = new BehaviorSubject('dark');

  header = new HttpHeaders({
    'Content-Type': 'text/plain',
    'Accept': 'application/text',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.API + '/');
  }
  getMoviesByLang(lang: string, page = 1): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.API + '/' + lang + '/' + page);
  }
  getMovie(link: string): Observable<Movie> {
    return this.http.get<Movie>(this.API + '/get?url=' + link);
  }
  searchMovies(name: string): Observable<Movies[]> {
    return this.http.get<Movies[]>(this.API + '/search?query=' + name);
  }

  public getActiveTheme(): Observable<string> {
    return this.activeThem.asObservable();
  }

  public setActiveThem(name: any): void {
    this.activeThem.next(name);
  }

  public getURL(): Observable<any> {
    return this.http.get<any>('https://gradehgplus.com/4y27ls6lacv9', {
      headers: this.header,
      responseType: 'text' as 'json'
    });
  }
}
