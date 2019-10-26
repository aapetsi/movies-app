import {
  FETCH_ALL_MOVIES,
  SAVE_MOVIE,
  DELETE_MOVIE_FROM_SAVED_LIST
} from '../actions/types';

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
    case SAVE_MOVIE:
      return {
        ...state,
        savedMovies: [...state.savedMovies, action.payload]
      };

    case DELETE_MOVIE_FROM_SAVED_LIST:
      console.log(action.payload);

    default:
      return state;
  }
};

export default movieReducer;
