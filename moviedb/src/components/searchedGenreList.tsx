import { useFetchSearchGenreQuery } from "../store";
import { changeSearchTerm } from "../store";
import MovieCard from "./movieCard"
import React from 'react';
import { RootState } from "../store";
import { useSelector } from "react-redux";


function SearchedGenreList() {

    const searchTerm = useSelector<RootState, string>((state) => {
        return state.searchMovie.searchTerm;
    });


    const genreMap: Record<string, number> = {
        Action: 28,
        Comedy: 35,
        Drama: 18,
        Horror: 27,
        Romance: 10749,
        SciFi: 878,
        Thriller: 53,
    };

    const genreId = genreMap[searchTerm] || 0; // Default to 0 if not found

    const { data, error, isFetching } = useFetchSearchGenreQuery(genreId.toString());

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
        {!data || data.length === 0 ? (
          <div>No movies found for this genre.</div>
        ) : (
          content
        )}
      </div>
    );



}

export default SearchedGenreList;