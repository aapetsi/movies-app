import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from '../components/Homepage'
import Header from '../components/Header'
import BrowseMovies from '../components/BrowseMovies'
import SavedMovies from '../components/SavedMovies'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/browse" component={BrowseMovies} />
      <Route path="/saved" component={SavedMovies} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
