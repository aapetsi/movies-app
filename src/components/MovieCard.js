import React from 'react';
import { connect } from 'react-redux';
import { saveMovie } from '../actions/movies';

const MovieCard = ({ movie, saveMovie }) => {
  const handleSaveMovie = () => {
    saveMovie(movie);
  };
  return (
    <div>
      <h1>{movie.title_long}</h1>
      <img src={movie.medium_cover_image} />
      <p>{movie.synopsis}</p>
      <button onClick={handleSaveMovie} type="button">
        Save
      </button>
      <button type="button">Watched</button>
    </div>
  );
};

const mapDispatchToProps = {
  saveMovie
};

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
