import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from '../components/Homepage';
import Header from '../components/Header';
import BrowseMovies from '../components/BrowseMovies';
import SavedMovies from '../components/SavedMovies';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/browse" component={BrowseMovies} />
      <Route path="/saved" component={SavedMovies} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
