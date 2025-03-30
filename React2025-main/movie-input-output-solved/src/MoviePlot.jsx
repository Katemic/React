import React from 'react';

const MoviePlot = props => {
    //console.log(props.movie.Plot);
    //console.log(props.movie);
    if (props.movie){
        return ( 
            <div className="movieplot">
                <h3>Plot: </h3>
                <div>{props.movie.Plot}</div>
            </div>
         );
    }
    return null;
};

export default MoviePlot;