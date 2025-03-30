import { createSlice } from '@reduxjs/toolkit';
import MOCK_MOVIES from '../shared/MockMovies';

const initialState = {
  selectedMovie: null,
  movies: MOCK_MOVIES
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  
  reducers: {
    selectMovie: (state, action) => {
      state.selectedMovie = action.payload;
    }
  }
});

export const { selectMovie } = movieSlice.actions;
export const listOfMovies = (state) => state.movie.movies;
export const clickedMovie = (state) => state.movie.selectedMovie;
export default movieSlice.reducer;