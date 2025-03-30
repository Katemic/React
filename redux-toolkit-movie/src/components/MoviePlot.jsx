import React from 'react';
import { useSelector } from 'react-redux';
import { clickedMovie } from './MovieSlice';

export function MoviePlot(){
    const movie = useSelector(clickedMovie);
    if (movie){
        return ( 
            <div className="movieplot">
                <h3>Plot: </h3>
                <div>{movie.Plot}</div>
            </div>
         );
    }
    return null;
};


