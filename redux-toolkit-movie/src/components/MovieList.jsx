import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMovie, listOfMovies } from './MovieSlice';
import './MovieList.css';


export function MovieList() { 
  const dispatch = useDispatch();
  const movielist = useSelector(listOfMovies);
    
    return (    
      <div className="MovieList">
        <div className="movie-group">
          <h2>Movie list:</h2>
          <ul className="movies">
              {movielist.map(movie => { 
                return  <li key={movie.Title} onClick={() => dispatch(selectMovie(movie))}>
                          {movie.Title}    {movie.Year}
                        </li> 
                })
              }           
        </ul>
      </div>
      </div>
    );
  
}


