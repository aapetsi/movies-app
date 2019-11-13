import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';
import { deleteAllMoviesFromSavedList } from '../actions/movies';

const SavedMovies = ({ savedMovies, deleteAllMoviesFromSavedList }) => {
  const handleDeleteAll = () => {
    deleteAllMoviesFromSavedList();
  };
  return (
    <div>
      <p>saved movies</p>
      <button onClick={handleDeleteAll} type="button">
        Clear All
      </button>
      {savedMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  savedMovies: state.movies.savedMovies
});

const mapDispatchToProps = {
  deleteAllMoviesFromSavedList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedMovies);
