import axios from 'axios'
import { SET_ERRORS, REGISTER_USER } from './types'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post('http://localhost:5000/api/users/register', userData)
    .then(res => {
      history.push('/login')
      dispatch({
        type: REGISTER_USER
      })
    })
    .catch(err => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      })
    })
}
