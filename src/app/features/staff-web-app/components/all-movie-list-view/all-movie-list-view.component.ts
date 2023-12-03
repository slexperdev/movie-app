import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/model/movie';
import { BaseService } from 'src/app/core/service/API/base-service/base-service';

@Component({
  selector: 'app-all-movie-list-view',
  templateUrl: './all-movie-list-view.component.html',
  styleUrls: ['./all-movie-list-view.component.css']
})
export class AllMovieListViewComponent implements OnInit{

  moviesList : Array<Movie> = [];
  
  constructor(private _APIBaseService : BaseService){
    
  }
  ngOnInit(): void {
    this._getAllMovies();
  }


  private _getAllMovies(){

    this._APIBaseService.get<any>('movies').subscribe((data:Array<Movie>)=> {
      this.moviesList = data;
    }, (error:any) => {
      
    });
  }

}
