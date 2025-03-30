import React from 'react';


const MoviePoster = props => { 
    const posterAssetsUrl = "src/assets/Image/";
    //console.log(`${posterAssetsUrl}${props.movies[0].Poster}`);
    if (props.movie){
    return (
        
        <div className="movieposter">
            <h3>Poster: </h3>
            <div> <img className="poster" alt="Poster" src={`${posterAssetsUrl}${props.movie.Poster}`}></img> </div>
        </div>
    );
}
return null;
};

export default MoviePoster;