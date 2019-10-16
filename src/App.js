import React from 'react'
import AppRouter from './routers/AppRouter'
// import { Provider } from 'react-redux'
// import store from './store/store'

const App = () => {
  return (
    <div>
      <h1>Movie App</h1>
      {/* <Provider store={store()}> */}
      <AppRouter />
      {/* </Provider> */}
    </div>
  )
}

export default App
