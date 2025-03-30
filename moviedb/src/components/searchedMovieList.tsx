import { useFetchSearchMovieQuery } from "../store";
import { changeSearchTerm } from "../store";
import MovieCard from "./movieCard"
import React from 'react';
import {RootState} from "../store";
import { useSelector } from "react-redux";


function SearchedMovieList(){

    const searchTerm = useSelector<RootState,string>((state) => {
        return state.searchMovie.searchTerm;
      });
    const {data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);

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
      <div className="row row-cols-3 row-cols-md-2 m-4">
        {content}
      </div>
    );

}

export default SearchedMovieList;