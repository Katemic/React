import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../components/MovieSlice';

export const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});
