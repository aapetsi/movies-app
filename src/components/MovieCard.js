import React from 'react';
import { connect } from 'react-redux';
import { saveMovie } from '../actions/movies';

const MovieCard = ({ dispatch, movie }) => {
  const handleSaveMovie = () => {
    dispatch(saveMovie(movie));
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

export default connect(
  null,
  null
)(MovieCard);
