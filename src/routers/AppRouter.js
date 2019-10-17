import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from '../components/Homepage'
import Navbar from '../components/Navbar'
import BrowseMovies from '../components/BrowseMovies'

const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Homepage} />
      <Route path='/browse' component={BrowseMovies} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
