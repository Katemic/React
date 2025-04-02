import { configureStore} from '@reduxjs/toolkit'; //fjernet middelware
import { setupListeners } from '@reduxjs/toolkit/query'; //ændret noget her
import { moviesApi } from './apis/movieApi'; //fjernet et s
import searchMovieSliceReducer  from './searchMovieSlice';
import { favoritesApi } from './apis/favoriteApi';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    searchMovie: searchMovieSliceReducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer 

  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware)
    .concat(favoritesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery } from './apis/movieApi'; //fjernet s
export { useFetchHighestRatedMoviesQuery } from './apis/movieApi';
export {changeSearchTerm, changeSearchType} from './searchMovieSlice';
export {useFetchSearchMovieQuery} from './apis/movieApi';
export {useFetchUpcomingMoviesQuery} from './apis/movieApi';
export {useFetchPopularTvShowsQuery} from './apis/movieApi';
export {useFetchMovieTrailerQuery} from './apis/movieApi';
export type RootState = ReturnType<typeof store.getState>
export {useFetchFavoriteMoviesQuery} from './apis/favoriteApi';
export {useAddFavoriteMovieMutation} from './apis/favoriteApi';
export {useRemoveFavoriteMovieMutation} from './apis/favoriteApi';
export {useFetchSearchDirectorQuery} from './apis/movieApi';
export {useFetchSearchGenreQuery} from './apis/movieApi';
