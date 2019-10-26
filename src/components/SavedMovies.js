import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const SavedMovies = ({ savedMovies }) => (
    <div>
      <p>saved movies</p>
      {savedMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );

const mapStateToProps = (state) => ({
  savedMovies: state.movies.savedMovies
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedMovies);
