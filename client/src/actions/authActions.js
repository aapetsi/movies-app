import axios from 'axios'
import { SET_ERRORS } from './types'

export const registerUser = userData => dispatch => {
  axios
    .post('http://localhost:5000/api/users/register', userData)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}
