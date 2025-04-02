import {createSlice} from '@reduxjs/toolkit';
import React from 'react';


const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: {
        searchTerm: '',
        searchType: 'title'
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;

        },
        changeSearchType(state, action) {
            state.searchType = action.payload;
        }

    }
});

export const { changeSearchTerm, changeSearchType } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;