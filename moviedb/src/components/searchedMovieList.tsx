import { useFetchSearchMovieQuery } from "../store";
import { useFetchSearchGenreQuery } from "../store";
import { useFetchSearchDirectorQuery } from "../store";
import { changeSearchTerm } from "../store";
import MovieCard from "./movieCard"
import React from 'react';
import {RootState} from "../store";
import { useSelector } from "react-redux";


function SearchedMovieList(){

    const searchTerm = useSelector<RootState,string>((state) => {
        return state.searchMovie.searchTerm;
      });

    const searchType = useSelector<RootState, string>((state) => {
        return state.searchMovie.searchType;
      })
    console.log(searchTerm + " - " + searchType);

    const genreMap: Record<string, number> = {
      Action: 28,
      Comedy: 35,
      Drama: 18,
      Horror: 27,
      Romance: 10749,
      SciFi: 878,
      Thriller: 53,
    };


    let data, error, isFetching;

    if (searchType === "genre") {
      const genreId = genreMap[searchTerm];
    if (!genreId) {
      console.warn(`Invalid genre: ${searchTerm}`);
      data = [];
      error = null;
      isFetching = false;
    } else {
      const queryResult = useFetchSearchGenreQuery(genreId.toString()); // Pass genre ID to the query
      data = queryResult.data;
      error = queryResult.error;
      isFetching = queryResult.isFetching;
    }

    } else if (searchType === "title") {
      const queryResult = useFetchSearchMovieQuery(searchTerm);
      data = queryResult.data;
      error = queryResult.error;
      isFetching = queryResult.isFetching;
    } else if (searchType === "instructor") {
      const queryResult = useFetchSearchDirectorQuery(searchTerm);
      data = queryResult.data;
      error = queryResult.error;
      isFetching = queryResult.isFetching;
    }

    //const {data, error, isFetching } = useFetchSearchMovieQuery(searchTerm);

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