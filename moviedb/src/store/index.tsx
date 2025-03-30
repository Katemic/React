import { configureStore} from '@reduxjs/toolkit'; //fjernet middelware
import { setupListeners } from '@reduxjs/toolkit/query'; //ændret noget her
import { moviesApi } from './apis/movieApi'; //fjernet et s
import searchMovieSliceReducer  from './searchMovieSlice';

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    searchMovie: searchMovieSliceReducer
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(moviesApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useFetchPopularMoviesQuery } from './apis/movieApi'; //fjernet s
export { useFetchHighestRatedMoviesQuery } from './apis/movieApi';
export {changeSearchTerm} from './searchMovieSlice';
export {useFetchSearchMovieQuery} from './apis/movieApi';
export {useFetchUpcomingMoviesQuery} from './apis/movieApi';
export type RootState = ReturnType<typeof store.getState>
