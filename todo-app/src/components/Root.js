import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { ConnectedRouter } from 'react-router-redux'
import { createStore } from 'redux'

import App from './App'
import todoApp from '../reducers/index.js'

let store = createStore(todoApp)

const history = createHistory();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
        <Route exact path="/(:filter)" component={App} />
    </BrowserRouter>
  </Provider>
)
