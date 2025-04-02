import React from 'react';
import MovieImg from '../assets/Image/MovieImg.jpg';  


function Home(){
    return (
        // <div className="container">
        //     <div className="row row-cols-3 row-cols-md-2 m-4">
        //         <h1>MovieFinder</h1>
        //     </div>
        // </div>

        <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className='text-center'>MovieFinder</h1>
        <img className="rounded movie_img m-3" src={MovieImg} width="400" height="400"/>
        </div>

    );
}
export default Home;