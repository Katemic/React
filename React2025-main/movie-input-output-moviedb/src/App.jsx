import React, { Component } from 'react';
import MovieImg from './assets/Image/movie_img.png';
//import MOCK_MOVIES from './Shared/MockMovies';
import MovieList from './MovieList';
import MoviePoster from './MoviePoster';
import MoviePlot from './MoviePlot';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends Component {
  
  state = {
    movies: null,
    selectedMovie: null
  };

  onSearchSubmit = async (term) =>{
    //console.log(term);
    const response = await axios.get('http://api.themoviedb.org/3/search/movie?query=' + term + '&api_key=81c50c197b83129dd4fc387ca6c8c323')
    //console.log(response.data.results.slice(0,10));
    this.setState({movies: response.data.results.slice(0,10)});
    this.setState({selectedMovie: null});
  }

  onSelectedMovieCallBack = (movie) => {
      this.setState({selectedMovie : movie});
  }
  
  render() {
    return (
      <div className="App">
        <div class="mt-4 p-5 bg-dark text-white rounded">
          <h1>React Movies <img alt="Movie" src={MovieImg}></img> </h1>  
           This small App demonstrates communication between child-components using Props/State and CallBack
        </div> 
        <div className="row mt-4">
          <div className="col-sm-1"></div>
          <div className="col-sm-3">
              <SearchBar onSearchMovie={this.onSearchSubmit}/>
              <br/>
        </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
              <MovieList SearchMovies={this.state.movies} onSelectedMovie={this.onSelectedMovieCallBack}/>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-5">
              <MoviePoster movie={this.state.selectedMovie}/>
          </div>
          <div className="col-sm-1"></div>
        </div>
        <div className="row">
          <div className="col-sm-1"></div>
          <div className="col-sm-8">
              <MoviePlot movie={this.state.selectedMovie}/>
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    );
  }
}

export default App;

