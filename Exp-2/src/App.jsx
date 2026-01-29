import React from 'react';
import AnimeList from './components/AnimeList';
import { animeData } from './data';

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1>Anime Streaming Hub</h1>
        <p className="lead">Discover your favorite anime series</p>
      </header>
      <AnimeList animes={animeData} />
    </div>
  );
}

export default App;
