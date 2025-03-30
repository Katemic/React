import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store";
import { useNavigate } from "react-router-dom";
import React from 'react';
//import { RootState } from "@reduxjs/toolkit/query";
import {RootState} from "../store";


function SearchMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector<RootState,string>((state) => {
    return state.searchMovie.searchTerm;
  });
  const handleSearchTermChange = (event) => {
    console.log(event.target.value);
    dispatch(changeSearchTerm(event.target.value));
  }
  const handleSubmit = (event) => {
                 //dette for at undgå at Browseren automatisk prøver et udføre et submit  
                 //dispatch(changeSearchTerm(searchTerm));
                 event.preventDefault();
                 navigate("/searchedMovie");
  }
  return (
   <form onSubmit={handleSubmit}>
     <label >Search</label>
     <input className="input ml-2" value={searchTerm} onChange={handleSearchTermChange}/>
     </form>    
  );
}
export default SearchMovie;