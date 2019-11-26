import { REGISTER_USER, SET_ERRORS } from '../actions/types'

const initialState = {
  errors: {},
  isSignedUp: false
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        errors: {},
        isSignedUp: true
      }
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state
  }
}

export default registerReducer
