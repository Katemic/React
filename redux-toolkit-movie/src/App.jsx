import MovieImg from './assets/Image/movie_img.png';
import {MovieList} from './components/MovieList';
import {MoviePoster} from './components/MoviePoster';
import {MoviePlot} from './components/MoviePlot';
import './App.css'
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import UnderConstruction from './components/UnderConstruction'
import Movies from './components/Movies';
import About from './components/About';
import MovieDetails from './components/MovieDetails';



function App() {

  return (
    <div className="App">
      
      <div>
        <Header />
      </div>
      
      <div className="mt-4 p-5 bg-dark text-white rounded">
        <h1>React-Redux Movies <img alt="Movie" src={MovieImg}></img> </h1>  
         This small React-App demonstrates the use of React-Redux for the communication between child-components
      </div> 
      

      <Routes>
       <Route path='/' element={<Movies/>} />
       <Route path='/About' element={<About/>}/>
       <Route path='/Login' element={<UnderConstruction/>} />
       <Route path='/Admin' element={<UnderConstruction/>} />
       <Route path='/MovieDetails' element={<MovieDetails/>} />
       <Route path='*' element={<Movies/>} />
      </Routes>


    </div>



  );
}

export default App
