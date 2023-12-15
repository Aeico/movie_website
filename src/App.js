import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import MovieCard from './MovieCard';

const TMDB_key = process.env.REACT_APP_IMDB_KEY;

function CallAPI(){
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/movie/11?api_key='+process.env.REACT_APP_IMDB_KEY)
      .then(response => {
        setMoviesData(response.data);
        console.log(moviesData);
      })
      .catch(error => {
        console.log('https://api.themoviedb.org/3/movie/11?api_key='+process.env.REACT_APP_IMDB_KEY)
        console.error(error);
      });
  }, []);
};

function App() {
  CallAPI();

  return (
    <div className="App">
      <header className="App-header">
        <MovieCard/>
      </header>
    </div>
  );
}

export default App;
