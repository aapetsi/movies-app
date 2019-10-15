import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from '../components/Homepage'

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Homepage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter
