import React from 'react';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/store';

const App = () => (
  <div>
    <React.StrictMode>
      <Provider store={store()}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  </div>
);

export default App;
