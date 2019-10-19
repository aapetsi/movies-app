import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/movies'

const api = 'https://yts.lt/api/v2/list_movies.json'

const Homepage = (props) => {
  useEffect(() => {
    props.dispatch(actionCreators.fetchAllMovies())
  }, [])
  return (
    <div>
      <h1>Homepage component</h1>
      <p>
        {props.movies.length}
        {' '}
movies in store currently
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies
})

export default connect(
  mapStateToProps,
  null
)(Homepage)
