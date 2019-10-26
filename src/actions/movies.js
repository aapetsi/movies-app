import axios from 'axios';
import {
  FETCH_ALL_MOVIES,
  SAVE_MOVIE,
  DELETE_MOVIE_FROM_SAVED_LIST
} from './types';

export const NumberOfMoviesInDatabase = () => {
  axios
    .get('https://yts.lt/api/v2/list_movies.json?limit=50')
    .then((res) => res.data.data.movie_count)
    .catch((err) => err);
};

export const fetchAllMovies = () => (dispatch) => {
  axios
    .get('https://yts.lt/api/v2/list_movies.json')
    .then((res) => {
      dispatch({
        type: FETCH_ALL_MOVIES,
        payload: res.data.data.movies
      });
    })
    .catch((err) => err);
};

export const saveMovie = (movie) => (dispatch) => {
  dispatch({
    type: SAVE_MOVIE,
    payload: movie
  });
};

export const deleteMovieFromSavedList = (id) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE_FROM_SAVED_LIST, payload: id });
};
