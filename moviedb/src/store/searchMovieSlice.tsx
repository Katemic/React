import {createSlice} from '@reduxjs/toolkit';
import React from 'react';


const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchTerm: ''
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        }

    }
});

export const { changeSearchTerm } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;