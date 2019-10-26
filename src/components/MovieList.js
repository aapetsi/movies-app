import React from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = ({ savedMovies }) => (
  <div>
    <p>MovieList component</p>
    {savedMovies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  savedMovies: state.movies.movies
});

export default connect(
  mapStateToProps,
  null
)(MovieList);
