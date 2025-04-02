import React from 'react';
import { useFetchFavoriteMoviesQuery } from "../store";
import MovieCard from "./movieCard"



function FavoriteMovieList() {

    const { data, error, isFetching } = useFetchFavoriteMoviesQuery();
    console.log(data, error, isFetching);


    let content;
    if (isFetching) {
        content = <div>Loading;</div>
    } else if (error) {
        content = <div>Error loading movies.</div>;
    } else {
        content = data?.map((movie) => {
            return <MovieCard key={movie.id} movie={movie}></MovieCard>
        });
    }


    return (
        <div>

       <h1>Favorite movies:</h1>

        <div className="row row-cols-3 row-cols-md-2 m-4">
            {content}
        </div> 
        </div>
    );

}

export default FavoriteMovieList;