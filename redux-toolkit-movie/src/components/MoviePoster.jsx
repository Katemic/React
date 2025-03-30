import React from 'react';
import { useSelector } from 'react-redux';
import { clickedMovie } from './MovieSlice';

export function MoviePoster(){
    const posterAssetsUrl = "src/assets/Image/";
    const movie = useSelector(clickedMovie);

    if (movie){
         return ( 
            <div className="movieposter">
                <h3>Poster:</h3>
                <div><img className="poster" alt="Poster" src={`${posterAssetsUrl}${movie.Poster}`}></img> </div>
            </div>
        );
    }
    return null;
};


