import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  BASE_URL = '/api';

  constructor(private http: HttpClient) { }

  getmovies(pageIndex:number, pageSize: number, sort: string, filterName?: string): Observable<Movie[]>{
    const  url = this.BASE_URL + `/movies?_page=${pageIndex}&_limit=${pageSize}&_sort=${sort}`;
    return this.http.get<Movie[]>(url);
  }

  getCountElements(): any{
    const  url = this.BASE_URL + `/movies`;
    return this.http.get<any>(url).pipe(
      map( resp => {
        return resp.length;
      })
    );
  }

  getmoviesId(id: number): Observable<Movie>{
    const  url = this.BASE_URL + `/movies/${id}`;
    return this.http.get<Movie>(url);
  }

  updateMovie(movie: Movie,id: number): Observable<Movie>{
    const  url = this.BASE_URL + `/movies/${id}`;
    return this.http.put<Movie>(url,movie);
  }

  deleteMovie(id: number): Observable<Movie>{
    const  url = this.BASE_URL + `/movies/${id}`;
    return this.http.delete<Movie>(url);
  }

  addMovie(movie: Movie): Observable<Movie>{
    const  url = this.BASE_URL + `/movies`;
    return this.http.post<Movie>(url,movie);
  }
}
