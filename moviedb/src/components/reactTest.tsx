import React, { useEffect, useState } from "react";
import MovieCard from "./movieCard";

function ReactTest() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching popular movies...");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81c50c197b83129dd4fc387ca6c8c323"
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
  <div className="row row-cols-3 row-cols-md-2 m-4">
      {movies.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default ReactTest;