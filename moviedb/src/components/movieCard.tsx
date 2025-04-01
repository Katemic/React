import React, { useState } from 'react';
import { useFetchMovieTrailerQuery } from '../store';

function MovieCard({ movie }) {

    const [showTrailer, setShowTrailer] = useState(false);
    const { data: trailerKey, isFetching, error } = useFetchMovieTrailerQuery(movie.id);
    console.log(trailerKey, isFetching, error);

    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    const handlePlayClick = () => {
        if (trailerKey) {
            setShowTrailer(true);
        } else {
            alert('Trailer not available');
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