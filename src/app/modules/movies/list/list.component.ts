import { Component, OnInit } from '@angular/core';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { MoviesService } from '../../../services/movies.service';
import { Movie } from '../../../models/movies.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  movies: Movie[] = [];
  defaultImg = 'http://dummyimage.com/400x600.png/5fa2dd/ffffff';

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    forkJoin([
      this.moviesService.getCountElements(),
      this.moviesService.getmovies(0,1000,'id')
    ]).pipe(
      catchError(() => of([])),
      finalize(() => {
      })
  )
  .subscribe( (data: any) => {
    //filterName ? this.resultLength = data[1].length : this.resultLength = data[0];
    this.movies = data[1];
  });
  }


}
