

export interface Movie {

    adult: boolean;
    genre_ids: number[];
    id: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
    vote_count: number;


}

export interface MovieResponse{
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;

}


export interface MovieResult{

    page: number;
    results: MovieResponse[];
    total_pages: number;
    total_results: number;

}
