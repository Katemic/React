import React from 'react';
import {MovieList} from './MovieList';
import {MoviePoster} from './MoviePoster';
import {MoviePlot} from './MoviePlot';


const Movies = () => (
    <div>
        <h1>Movie list</h1>
        
        <div className="row mt-4">
                <div className="col-sm-1"></div>
                <div className="col-sm-4">
                    <MovieList />
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                    <MoviePoster />
                </div>
                <div className="col-sm-1"></div>
              </div>
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-8">
                    <MoviePlot />
                </div>
                <div className="col-sm-3"></div>
              </div>


    </div>
)

export default Movies