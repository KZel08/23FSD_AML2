import React from 'react';
import AnimeCard from './AnimeCard';

const AnimeList = ({ animes }) => {
  return (
    <div className="row">
      {animes.map(anime => (
        <AnimeCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;