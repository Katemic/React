import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { Movie, MovieResponse, MovieResult } from '../../types/movie';
import { TvShow, TvShowResult, TvShowResponse } from '../../types/tvshows';

const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.themoviedb.org/3/'
  }),
  endpoints(builder) {
    return {
      fetchPopularMovies: builder.query<Movie[],void>({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'popularity.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },
        transformResponse(response: MovieResult): Movie[] {
          return response.results.map((movie: MovieResponse) => {
            return {
              adult: movie.adult,
              genre_ids: movie.genre_ids,
              id: movie.id,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              title: movie.title,
              vote_average: movie.vote_average,
              vote_count: movie.vote_count
            };
          });
        }
        

      }),

      fetchHighestRatedMovies: builder.query<Movie[],void>({
        query: () => {
          return {
            url: 'discover/movie',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },

        transformResponse(response: MovieResult): Movie[] {
          return response.results.map((movie: MovieResponse) => {
            return {
              adult: movie.adult,
              genre_ids: movie.genre_ids,
              id: movie.id,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              title: movie.title,
              vote_average: movie.vote_average,
              vote_count: movie.vote_count
            };
          });
        }

      }), 

      fetchSearchMovie: builder.query<Movie[],string>({
        query: (searchTerm) => {
          return {
            url: 'search/movie',
            params: {
              query: searchTerm,
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },

        transformResponse(response: MovieResult): Movie[] {
          return response.results.map((movie: MovieResponse) => {
            return {
              adult: movie.adult,
              genre_ids: movie.genre_ids,
              id: movie.id,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              title: movie.title,
              vote_average: movie.vote_average,
              vote_count: movie.vote_count
            };
          });
        }



      }), 

      fetchUpcomingMovies: builder.query<Movie[],void>({
        query: () => {
          return {
            url: 'movie/upcoming',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },

        transformResponse(response: MovieResult): Movie[] {
          return response.results.map((movie: MovieResponse) => {
            return {
              adult: movie.adult,
              genre_ids: movie.genre_ids,
              id: movie.id,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              title: movie.title,
              vote_average: movie.vote_average,
              vote_count: movie.vote_count
            };
          });
        }

      }),

      fetchPopularTvShows: builder.query<TvShow[],void>({
        query: () => {
          return {
            url: 'discover/tv',
            params: {
              sort_by: 'vote_average.desc',
              api_key: '81c50c197b83129dd4fc387ca6c8c323'
            },
            method: 'GET',
          };
        },

        transformResponse(response: TvShowResult): TvShow[] {
          return response.results.map((tvshow: TvShowResponse) => {
            return {
              first_air_date: tvshow.first_air_date,
              genre_ids: tvshow.genre_ids,
              id: tvshow.id,
              name: tvshow.name,
              origin_country: tvshow.origin_country,
              original_language: tvshow.original_language,
              overview: tvshow.overview,
              popularity: tvshow.popularity,
              poster_path: tvshow.poster_path,
              vote_average: tvshow.vote_average,
              vote_count: tvshow.vote_count

            };
          });
        }

      }),



    };
  },
});

export const {useFetchPopularMoviesQuery} = moviesApi;
export const {useFetchHighestRatedMoviesQuery} = moviesApi;
export const {useFetchSearchMovieQuery} = moviesApi;
export const {useFetchUpcomingMoviesQuery} = moviesApi;
export { moviesApi };