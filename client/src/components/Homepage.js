import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllMovies } from '../actions/movies';
import MovieList from './MovieList';

const Homepage = ({ fetchAllMovies }) => {
  useEffect(() => {
    fetchAllMovies();
  }, []);
  return (
    <main>
      <h1>Homepage component</h1>
      <MovieList />
    </main>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies
});

const mapDispatchToProps = {
  fetchAllMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
