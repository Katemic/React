import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import React from 'react';
import { Movie} from '../../types/movie';


const favoritesApi = createApi({
    reducerPath: 'favorites',
    tagTypes: ['Movies'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3005/'
    }),

    endpoints(builder) {
        return {
            fetchFavoriteMovies: builder.query<Movie[],void>({
                providesTags: ['Movies'],
                query: () => {
                    return {
                        url: 'favoritMovies',
                        method: 'GET'
                    }
                }
            }),

            addFavoriteMovie: builder.mutation<void,Movie>({
                invalidatesTags: ['Movies'],
                query: (movie) => {
                    return {
                        url: 'favoritMovies',
                        method: 'POST',
                        body: movie
                    }
                }
            }),

            removeFavoriteMovie: builder.mutation<void, Movie>({
                invalidatesTags: ['Movies'],
                query: (movie) => {
                    console.log("API: " + movie.id)
                    return {
                        url: `favoritMovies/${movie.id}`,
                        method: 'DELETE'
                    }
                }
            })

        }
    }

});

export const { useFetchFavoriteMoviesQuery } = favoritesApi;
export const { useAddFavoriteMovieMutation } = favoritesApi;
export const { useRemoveFavoriteMovieMutation } = favoritesApi;
export { favoritesApi };