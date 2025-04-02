import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm, changeSearchType } from "../store";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
//import { RootState } from "@reduxjs/toolkit/query";
import {RootState} from "../store";


function SearchMovie() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const searchTerm = useSelector<RootState,string>((state) => {
  //   return state.searchMovie.searchTerm;
  // });
  // const searchType = useSelector<RootState, string>((state) => {
  //   return state.searchMovie.searchType;
  // })

  // const handleSearchTermChange = (event) => {
  //   console.log(event.target.value);
  //   dispatch(changeSearchTerm(event.target.value));
  // }

  // const handleSearchTypeChange = (event) =>{
  //   console.log("change: "+event.target.value);
  //   dispatch(changeSearchType(event.target.value));
  // }

  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [localSearchType, setLocalSearchType] = useState("title");

  const handleSearchTermChange = (event) => {
    setLocalSearchTerm(event.target.value); // Update local state
  };

  const handleSearchTypeChange = (event) => {
    setLocalSearchType(event.target.value); // Update local state
  };

  // const handleSubmit = (event) => {
  //                //dette for at undgå at Browseren automatisk prøver et udføre et submit  
  //                //dispatch(changeSearchTerm(searchTerm));
  //                event.preventDefault();
  //                navigate("/searchedMovie");
  // }

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Dispatch local state to Redux
    dispatch(changeSearchTerm(localSearchTerm));
    dispatch(changeSearchType(localSearchType));

    // Navigate to the results page
    if (localSearchType === "title") {
      navigate("/searchedMovie");
    }
    else if (localSearchType === "genre") {
      navigate("/searchedGenre"); // Navigate to the genre search results page
    }
    else if (localSearchType === "instructor") {
      navigate("/searchedDirector"); // Navigate to the instructor search results page
    }
  };

  return (
   <form onSubmit={handleSubmit}>
     <label >Search</label>
     <input className="input ml-2" value={localSearchTerm} onChange={handleSearchTermChange}/>
     <div className="mt-3">
        <label>
          <input
            type="radio"
            name="searchType"
            value="title"
            checked={localSearchType === "title"}
            onChange={handleSearchTypeChange}
          />
          Title
        </label>
        <label className="ml-3">
          <input
            type="radio"
            name="searchType"
            value="genre"
            checked={localSearchType === "genre"}
            onChange={handleSearchTypeChange}
          />
          Genre
        </label>
        <label className="ml-3">
          <input
            type="radio"
            name="searchType"
            value="instructor"
            checked={localSearchType === "instructor"}
            onChange={handleSearchTypeChange}
          />
          Instructor
        </label>
      </div>

      <button type="submit" className="btn btn-primary mt-3">
        Search
      </button>
     </form>    
  );
}
export default SearchMovie;