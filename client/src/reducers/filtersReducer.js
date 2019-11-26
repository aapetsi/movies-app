const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default filtersReducer
