import { FETCH_ALL_MOVIES } from '../actions/types';

const initialState = {
  movies: [],
  savedMovies: [],
  watchedMovies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return {
        ...state,
        movies: [...action.payload]
      };
    default:
      return state;
  }
};

export default movieReducer;
