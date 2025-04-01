import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import PopularMoviesList from './components/popularMoviesList';
import React from 'react';
import HighestRatedMovies from './components/highestRatedMoviesList';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import MovieImg from './assets/Image/MovieImg.jpg';  
import SearchMovie from './components/searchMovie';
import SearchedMovieList from './components/searchedMovieList';
import UpcomingMovies from './components/upcomingMovies';
import PopularTvShowList from './components/popularTvShows';

function App() {
  return (
    <div>
      {/* <h1 className="title is-2">Movies from TheMovieDB</h1>
      <PopularMoviesList/>
      <HighestRatedMovies/> */}
      
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">    
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className="nav-item nav-link">Upcoming</Link>
            <Link to='/tvshowsPopular' className="nav-item nav-link">Tv Shows</Link>
          </nav>
        </div>
          <span className='h1'>React Moviefinder <img className="rounded movie_img m-3" src={MovieImg} width="75" height="75"/></span>
          <span><SearchMovie></SearchMovie></span>
        </div>
        <Routes>
            <Route path='/' element={<Home/>} />  
            <Route path='/popular' element={<PopularMoviesList/>} />    
            <Route path='/highest-rated' element={<HighestRatedMovies/>} />
            <Route path='/searchedMovie' element={<SearchedMovieList/>} />  
            <Route path='/upcoming' element={<UpcomingMovies/>} />     
            <Route path='/tvshowsPopular' element={<PopularTvShowList/>} />
            </Routes>
      
    </div>
  );
}
export default App;