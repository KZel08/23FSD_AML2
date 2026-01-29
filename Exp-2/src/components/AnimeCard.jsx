import React from 'react';

const AnimeCard = ({ anime }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={anime.image} className="card-img-top" alt={anime.title} />
        <div className="card-body">
          <h5 className="card-title">{anime.title}</h5>
          <p className="card-text">{anime.description}</p>
          <p className="card-text"><small className="text-muted">Genre: {anime.genre}</small></p>
          <p className="card-text"><small className="text-muted">Rating: {anime.rating}/10</small></p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;