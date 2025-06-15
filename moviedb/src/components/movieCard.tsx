import React, { useState } from 'react';
import { useFetchMovieTrailerQuery, 
    useAddFavoriteMovieMutation, 
    useFetchFavoriteMoviesQuery,
    useRemoveFavoriteMovieMutation } from '../store';

function MovieCard({ movie }) {

    const [showTrailer, setShowTrailer] = useState(false);
    const { data: trailerKey, isFetching, error } = useFetchMovieTrailerQuery(movie.id);
    //console.log(trailerKey, isFetching, error);
    const [addFavoriteMovie] = useAddFavoriteMovieMutation();
    const {data : favoriteMovies = []} = useFetchFavoriteMoviesQuery();
    const [removeFavoriteMovie] = useRemoveFavoriteMovieMutation();

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const handlePlayClick = () => {
        if (trailerKey) {
            setShowTrailer(true);
        } else {
            alert('Trailer not available');
        }
    };

    const isAlreadyFavorite = favoriteMovies.some((favMovie) => favMovie.id.toString() === movie.id.toString());

    const handleAddToFavorites = () => {

        if (isAlreadyFavorite) {
            // Remove the movie from the favorites list
            const favoriteMovie = favoriteMovies.find((favMovie) => favMovie.id.toString() === movie.id.toString());
            if (favoriteMovie) {
                removeFavoriteMovie(favoriteMovie)
                console.log(favoriteMovie.id)
            }
        } else {
            // Add the movie to the favorites list
            addFavoriteMovie(movie)
        }
    };


    return (
        <div className="col-lg-2 mb-4">
            <div className="card">
                <img src={posterBasePath + movie.poster_path} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title "><span>{movie.title.substring(0, 200)}</span></h5><span className="far fa-star" aria-hidden="true"></span><span className="ml-1">{movie.vote_average}</span>
                    <p className="card-text">{movie.overview.substring(0, 125).concat('....')}</p>
                    {/* <div className="d-flex justify-content-between p-0"><span className="far fa-calendar" aria-hidden="true"> {movie.release_date}</span><span className="far fa-play-circle"></span></div> */}
                    <div className="d-flex justify-content-between p-0">
                        <span className="far fa-calendar" aria-hidden="true">
                            {' '}
                            {movie.release_date}
                        </span>
                        <span
                            className="far fa-play-circle"
                            style={{ cursor: 'pointer' }}
                            onClick={handlePlayClick}
                        ></span>
                    </div>
                    <button
                        className="btn btn-link mt-2"
                        onClick={handleAddToFavorites}
                        style={{ border: 'none', background: 'none', cursor: 'pointer' }}
                    >
                        {isAlreadyFavorite ? (
                            <i className="fas fa-star text-warning"></i> // Filled star for favorite
                        ) : (
                            <i className="far fa-star text-warning"></i> // Unfilled star for not favorite
                        )}
                    </button>
                </div>
            </div>

            {showTrailer && trailerKey && (
                <div className="modal" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{movie.title} - Trailer</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowTrailer(false)}
                                >X</button>
                            </div>
                            <div className="modal-body">
                                <iframe
                                    width="100%"
                                    height="400"
                                    src={`https://www.youtube.com/embed/${trailerKey}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}




        </div>
    );
}



export default MovieCard;