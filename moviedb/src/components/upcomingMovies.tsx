import { useFetchUpcomingMoviesQuery} from "../store";
import MovieCard from "./movieCard"
import React from 'react';

function UpcomingMovies() {

    const {data, error, isFetching } = useFetchUpcomingMoviesQuery();

    console.log(data, error, isFetching);


    let content;
      if (isFetching) {
        content = <div>Loading;</div>
      } else if (error) {
        content = <div>Error loading movies.</div>;
      } else {
        content = data?.filter(movie => movie.poster_path !== null).map((movie) => {
          return <MovieCard key={movie.id} movie={movie}></MovieCard>
        });
      }
        return (
        <div className="row row-cols-3 row-cols-md-2 m-4">
          {content}
        </div>
      );

}

export default UpcomingMovies;