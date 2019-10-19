import axios from 'axios'
import { FETCH_ALL_MOVIES } from './types'

export const NumberOfMoviesInDatabase = () => {
  axios
    .get('https://yts.lt/api/v2/list_movies.json?limit=50')
    .then((res) => res.data.data.movie_count)
    .catch((err) => err)
}

export const fetchAllMovies = () => (dispatch) => {
  axios
    .get('https://yts.lt/api/v2/list_movies.json')
    .then((res) => {
      dispatch({
        type: FETCH_ALL_MOVIES,
        payload: res.data.data.movies
      })
    })
    .catch((err) => err)
}
